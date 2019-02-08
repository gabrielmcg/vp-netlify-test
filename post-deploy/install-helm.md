# Install Helm


## Prerequisites

-   Install the `kubectl` binary on your Ansible box
-   Install the UCP Client bundle for the `admin` user
-   Confirm that you can connect to the cluster by running a test command, for example, `kubectl get nodes`


## Playbook

```
# cd ~/Docker-SimpliVity
# ansible-playbook -i vm_hosts playbooks/install_helm.yml --vault-password-file .vault_pass
```




## Install sample charts


### Nginx

```
# cd ~/Docker-SimpliVity
# helm install test/files/helm/nginx
```

The output shows a service being created with a NodePort at `34567`. This value comes from the `values.yml` file.


```
NAME:   worn-olm
LAST DEPLOYED: Fri Feb  8 16:23:21 2019
NAMESPACE: default
STATUS: DEPLOYED

RESOURCES:
==> v1/Deployment
NAME            DESIRED  CURRENT  UP-TO-DATE  AVAILABLE  AGE
worn-olm-nginx  1        1        1           1          14s

==> v1/Pod(related)
NAME                             READY  STATUS     RESTARTS  AGE
worn-olm-nginx-7d648f7dfb-gg2jk  1/1    Running    0         14s
worn-olm-nginx-vhwc7             0/1    Completed  0         14s

==> v1/ConfigMap
NAME            DATA  AGE
worn-olm-nginx  2     14s

==> v1/Service
NAME            TYPE      CLUSTER-IP    EXTERNAL-IP  PORT(S)       AGE
worn-olm-nginx  NodePort  10.96.30.222  <none>       80:34567/TCP  14s
```