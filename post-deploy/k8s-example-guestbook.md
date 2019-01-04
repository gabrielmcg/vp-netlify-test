# Kubernetes guestbook example with Redis

Many sample Kubernetes applications are available at [https://kubernetes.io/docs/tutorials/](https://kubernetes.io/docs/tutorials/). This section details how to deploy the stateless guestbook application with Redis as documented at [https://kubernetes.io/docs/tutorials/stateless-application/guestbook/](https://kubernetes.io/docs/tutorials/stateless-application/guestbook/). When deploying applications, you must be aware that Kubernetes version 1.8 shipped with Docker 2.0 and, as a result, you may have to make changes in some places to the configuration files, particularly with the `apiVersion` field.

The manifest file, included below, specifies a deployment controller that runs a single replica Redis master pod.

```
# cat redis-master-deployment.yaml
apiVersion: apps/**v1beta2**  # for versions before 1.9.0 use apps/v1beta2
kind: Deployment
metadata:
  name: redis-master
  labels:
    app: redis
spec:
  selector:
    matchLabels:
      app: redis
      role: master
      tier: backend
  replicas: 1
  template:
    metadata:
      labels:
        app: redis
        role: master
        tier: backend
    spec:
      containers:
      - name: master
        image: k8s.gcr.io/redis:e2e  # or just image: redis
        resources:
          requests:
            cpu: 100m
            memory: 100Mi
        ports:
        - containerPort: 6379

```

Apply the Redis master deployment from the `redis-master-deployment.yaml` file:

```
# kubectl apply -f redis-master-deployment.yaml
```

Query the list of Pods to verify that the Redis master pod is running.

```
# kubectl get pods
NAME                            READY     STATUS    RESTARTS   AGE
**redis-master-5f8d48b75f-8ztt4**   1/1       Running   0          33s

```

Use the `kubectl logs` command to view the logs from the Redis master pod:

```
[root@gab-ansible guestbook]#  kubectl logs -f  **redis-master-5f8d48b75f-8ztt4**
                _._
           _.-``__ ''-._
      _.-``    `.  `_.  ''-._           Redis 2.8.19 (00000000/0) 64 bit
  .-`` .-```.  ```\/    _.,_ ''-._
 (    '      ,       .-`  | `,    )     Running in stand alone mode
 |`-._`-...-` __...-.``-._|'` _.-'|     Port: 6379
 |    `-._   `._    /     _.-'    |     PID: 1
  `-._    `-._  `-./  _.-'    _.-'
 |`-._`-._    `-.__.-'    _.-'_.-'|
 |    `-._`-._        _.-'_.-'    |           http://redis.io
  `-._    `-._`-.__.-'_.-'    _.-'
 |`-._`-._    `-.__.-'    _.-'_.-'|
 |    `-._`-._        _.-'_.-'    |
  `-._    `-._`-.__.-'_.-'    _.-'
      `-._    `-.__.-'    _.-'
          `-._        _.-'
              `-.__.-'

[1] 24 Aug 15:24:06.575 # Server started, Redis version 2.8.19
[1] 24 Aug 15:24:06.576 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
[1] 24 Aug 15:24:06.576 # WARNING: The TCP backlog setting of 511 cannot be enforced because /proc/sys/net/core/somaxconn is set to the lower value of 128.
[1] 24 Aug 15:24:06.576 * The server is now ready to accept connections on port 6379

```

The guestbook application needs to communicate with the Redis master to write its data. You need to apply a service to proxy the traffic to the Redis master pod. A service defines a policy to access the pods.

```
# cat redis-master-service.yaml
apiVersion: v1
kind: Service
metadata:
  name: redis-master
  labels:
    app: redis
    role: master
    tier: backend
spec:
  ports:
  - port: 6379
    targetPort: 6379
  selector:
    app: redis
    role: master
    tier: backend

```

Apply the Redis master service from the `redis-master-service.yaml` file:

```
#  kubectl apply -f redis-master-service.yaml
service "redis-master" created

```

Query the list of services to verify that the Redis master service is running.

```
#  kubectl get service
NAME           TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE
kubernetes     ClusterIP   10.96.0.1       <none>        443/TCP    2d
redis-master   ClusterIP   10.96.174.129   <none>        6379/TCP   1m

```

Although the Redis master is a single pod, you can make it highly available to meet traffic demands by adding replica Redis slaves.

```
# cat redis-slave-deployment.yaml
apiVersion: apps/**v1beta2** # for versions before 1.9.0 use apps/v1beta2
kind: Deployment
metadata:
  name: redis-slave
  labels:
    app: redis
spec:
  selector:
    matchLabels:
      app: redis
      role: slave
      tier: backend
  replicas: 2
  template:
    metadata:
      labels:
        app: redis
        role: slave
        tier: backend
    spec:
      containers:
      - name: slave
        image: gcr.io/google_samples/gb-redisslave:v1
        resources:
          requests:
            cpu: 100m
            memory: 100Mi
        env:
        - name: GET_HOSTS_FROM
          value: dns
          # Using `GET_HOSTS_FROM=dns` requires your cluster to
          # provide a dns service. As of Kubernetes 1.3, DNS is a built-in
          # service launched automatically. However, if the cluster you are using
          # does not have a built-in DNS service, you can instead
          # access an environment variable to find the master
          # service's host. To do so, comment out the 'value: dns' line above, and
          # uncomment the line below:
          # value: env
        ports:
        - containerPort: 6379

```

Create the Redis slaves from the `redis-slave-deployment.yaml` file.

```
# kubectl apply -f  redis-slave-deployment.yaml
deployment.apps "redis-slave" created

```

Query the list of Pods to verify that the Redis slave pods are running.

```
# kubectl get pods
NAME                            READY     STATUS    RESTARTS   AGE
redis-master-5f8d48b75f-8ztt4   1/1       Running   0          39m
redis-slave-58fb7bb9b5-25z4m    1/1       Running   0          1m
redis-slave-58fb7bb9b5-q8zn9    1/1       Running   0          1m

```

The guestbook application needs to communicate to Redis slaves to read data. To make the Redis slaves discoverable, you need to set up a service that provides transparent load balancing to the set of pods.

```
# cat redis-slave-service.yaml
apiVersion: v1
kind: Service
metadata:
  name: redis-slave
  labels:
    app: redis
    role: slave
    tier: backend
spec:
  ports:
  - port: 6379
  selector:
    app: redis
    role: slave
    tier: backend

```

Deploy the Redis slave service from the `redis-slave-service.yaml` file

```
# kubectl apply -f redis-slave-service.yaml
service "redis-slave" created

```

Query the list of services to verify that the Redis slave service is running.

```
# kubectl get services
NAME           TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE
kubernetes     ClusterIP   10.96.0.1       <none>        443/TCP    2d
redis-master   ClusterIP   10.96.174.129   <none>        6379/TCP   30m
redis-slave    ClusterIP   10.96.82.175    <none>        6379/TCP   3m

```

The guestbook application has a web frontend written in PHP serving the HTTP requests. It is configured to connect to the `redis-master` service for write requests and the `redis-slave` service for read requests.

```
# cat frontend-deployment.yaml
apiVersion: **apps/v1beta2** # for versions before 1.9.0 use apps/v1beta2
kind: Deployment
metadata:
  name: frontend
  labels:
    app: guestbook
spec:
  selector:
    matchLabels:
      app: guestbook
      tier: frontend
  replicas: 3
  template:
    metadata:
      labels:
        app: guestbook
        tier: frontend
    spec:
      containers:
      - name: php-redis
        image: gcr.io/google-samples/gb-frontend:v4
        resources:
          requests:
            cpu: 100m
            memory: 100Mi
        env:
        - name: GET_HOSTS_FROM
          value: dns
          # Using `GET_HOSTS_FROM=dns` requires your cluster to
          # provide a dns service. As of Kubernetes 1.3, DNS is a built-in
          # service launched automatically. However, if the cluster you are using
          # does not have a built-in DNS service, you can instead
          # access an environment variable to find the master
          # service's host. To do so, comment out the 'value: dns' line above, and
          # uncomment the line below:
          # value: env
        ports:
        - containerPort: 80

```

Create the frontend deployment using the `frontend-deployment.yaml` file.

```
# kubectl apply -f frontend-deployment.yaml
deployment.apps "frontend" created

```

Query the list of pods to verify that the three frontend replicas are running.

```
# kubectl get pods -l app=guestbook -l tier=frontend
NAME                        READY     STATUS    RESTARTS   AGE
frontend-574b66f649-2qh6h   1/1       Running   0          7m
frontend-574b66f649-782mr   1/1       Running   0          7m
frontend-574b66f649-mnbc9   1/1       Running   0          7m

```

If you want guests to be able to access your guestbook, you must configure the frontend service to be externally visible, so a client can request the service from outside the container cluster.

```
# cat frontend-service.yaml
apiVersion: v1
kind: Service
metadata:
  name: frontend
  labels:
    app: guestbook
    tier: frontend
spec:
  # comment or delete the following line if you want to use a LoadBalancer
  **type: NodePort**
  # if your cluster supports it, uncomment the following to automatically create
  # an external load-balanced IP for the frontend service.
  # type: LoadBalancer
  ports:
  - port: 80
  selector:
    app: guestbook
    tier: frontend

```

Deploy the `frontend` service using the `frontend-service.yaml` file

```
# kubectl apply -f frontend-service.yaml
service "frontend" created

```

Query the list of services to verify that the `frontend` service is running.

```
# kubectl get services
NAME           TYPE        CLUSTER-IP      EXTERNAL-IP      PORT(S)        AGE
frontend       NodePort    10.96.14.76     <none>        80:**35440**/TCP   15s
kubernetes     ClusterIP   10.96.0.1       <none>        443/TCP        2d
redis-master   ClusterIP   10.96.174.129   <none>        6379/TCP       54m
redis-slave    ClusterIP   10.96.82.175    <none>        6379/TCP       27m

```

Access the UI, using the identified port, at `http://gab-ucp03.cloudra.local:**35440**/` as shown in [\#k8s-guestbook1](#k8s-guestbook1).

![ "Guestbook UI"][media-k8s-guestbook1-png]

**Figure 21.** Guestbook UI