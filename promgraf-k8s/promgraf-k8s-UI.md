

## Accessing Promethues UI

The Prometheus UI is available via your UCP, DTR or Kubernetes worker nodes, using `HTTP` on port `33090`, for example,

```
http://hpe-ucp01.am2.cloudra.local:33090
```


!["Prometheus Service Discovery"][media-prometheus-k8s-service-discovery] 




## Accessing Grafana UI

The Grafana UI is available via your UCP, DTR or Kubernetes worker nodes, using `HTTP` on port `33030`, 
for example,

```
http://hpe-ucp01.am2.cloudra.local:33030
```
The default username and password for Grafana is `admin`/`admin`. The first time you login, you will be asked 
to reset the default `admin` password.



[media-prometheus-k8s-service-discovery]:<../media/prometheus-k8s-service-discovery.png> "Prometheus Service Discovery"



