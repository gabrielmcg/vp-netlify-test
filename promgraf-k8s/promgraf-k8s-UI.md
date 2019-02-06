

## Accessing Promethues UI

The Prometheus UI is available via your UCP, DTR or Kubernetes worker nodes, using `HTTP` on port `33090`, for example,

```
http://hpe-ucp01.am2.cloudra.local:33090
```

To see what services are being monitored, access the service discovery page, via `Status -> Service Discovery`, or using the `/service-discovery` endpoint:

```
http://hpe2-ucp01.am2.cloudra.local:33090/service-discovery
```

The monitores services are listed as shown in the folowing figure.

!["Prometheus service discovery"][media-prometheus-k8s-service-discovery] 

**Figure:** Prometheus service discovery


To see the status for the monitored services, access the targets pag via `Status -> Targets` or using the endpoint `/targets`.

```
http://hpe2-ucp01.am2.cloudra.local:33090/targets
```

The status of the various monitors are displayed,  as shown in the folowing figure.

!["Prometheus targets"][media-prometheus-k8s-targets] 

**Figure:** Prometheus targets


## Accessing Grafana UI

The Grafana UI is available via your UCP, DTR or Kubernetes worker nodes, using `HTTP` on port `33030`, 
for example,

```
http://hpe-ucp01.am2.cloudra.local:33030
```
The default username and password for Grafana is `admin`/`admin`. The first time you login, you will be asked 
to reset the default `admin` password.



[media-prometheus-k8s-service-discovery]:<../media/prometheus-k8s-service-discovery.png> 
[media-prometheus-k8s-targets]:<../media/prometheus-k8s-targets.png> 



