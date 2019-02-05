# Playbooks for installing Prometheus and Grafana on Kubernetes

The playbook `playbooks/kube-prometheus.yml` is used to deploy the Prometheus/Grafana stack on Kubernetes. 
It is a wrapper for a number of separate playbooks outlined below. You can choose not to install certian components 
by commenting out the appropriate line in the wrapper playbook. 

- `playbooks/kube-prometheus/operator.yml` 
- `playbooks/kube-prometheus/kube-state-metrics.yml` 
- `playbooks/kube-prometheus/node-exporter.yml` 
- `playbooks/kube-prometheus/monitors.yml`
- `playbooks/kube-prometheus/prometheus.yml`
- `playbooks/kube-prometheus/grafana.yml`


## Prometheus Operator
The Prometheus Operator makes running Prometheus on top of Kubernetes as easy as possible, while preserving Kubernetes-native configuration options. For more information on Prometheus Operator, see https://coreos.com/operators/prometheus/docs/latest/user-guides/getting-started.html.

The playbook `playbooks/kube-prometheus/operator.yml` installs the operator itself. 

## Kube state metrics
'kube-state-metrics' is a simple service that listens to the Kubernetes API server and generates metrics about the state of the objects. It is not focused on the health of the individual Kubernetes components, but rather on the health of the various objects inside, such as deployments, nodes and pods. For more information on 'kube-state-metrics`, see https://github.com/kubernetes/kube-state-metrics.

The playbook `playbooks/kube-prometheus/kube-state-metrics.yml` installs on all UCP, DTR and Kubernetes worker nodes.

## Node exporter
The `node-exporter` provides an overview of cluster node resources including CPU, memory and disk utilization and more. For more information on `node-exporter`, see https://github.com/prometheus/node_exporter.

The playbook `playbooks/kube-prometheus/node-exporter.yml` installs `node-exporter` as a set of Docker containers on all UCP, DTR and Kubernetes worker nodes. Port `9100` is opened in the firewall on each node where it is installed.

## Monitors
While all the other Kubernetes components run on top of Kubernetes itself, `kubelet` and `apiserver` do not, and so they just need service monitors to access these metrics.

The playbook `playbooks/kube-prometheus/monitors.yml` installs Service Monitors for `kubelet` and `apiserver`.


**Note:**
Because Docker EE provides a hosted version of Kubernetes, it is not possible to access metrics for `kube-scheduler` and `kube-controller-manager`.


## Prometheus

For convenience, the playbook sets up a NodePort so that the Prometheus UI can be accessed on port `33090`.

```
kubectl -n monitoring patch svc prometheus-k8s --type='json' -p '[{"op":"replace","path":"/spec/type","value":"NodePort"}]'
kubectl -n monitoring patch svc prometheus-k8s --type='json' -p '[{"op": "add", "path":"/spec/ports/0/nodePort", "value":33090}]'
```

On a production system, it is likely that you will want to remove this NodePort.


```
kubectl -n monitoring patch svc prometheus-k8s --type='json' -p '[{"op": "remove", "path":"/spec/ports/0/nodePort"}]'
kubectl -n monitoring patch svc prometheus-k8s --type='json' -p '[{"op": "remove", "path":"/spec/type"}]'
```



## Grafana

For convenience, the playbook sets up a NodePort so that the Grafana UI can be access on the port `33030`.

```
 kubectl -n monitoring patch svc grafana --type='json' -p '[{"op":"replace","path":"/spec/type", "value":"NodePort"}]'
kubectl -n monitoring patch svc grafana --type='json' -p '[{"op": "add", "path":"/spec/ports/0/nodePort", "value":33030}]'
```

On a production system, it is likely that you will want to remove this NodePort.

```
kubectl -n monitoring patch svc grafana --type='json' -p '[{"op": "remove", "path":"/spec/ports/0/nodePort"}]'
kubectl -n monitoring patch svc grafana --type='json' -p '[{"op": "remove", "path":"/spec/type"}]'
```


## Teardown

 The playbook `playbooks/kube-prometheus-teardown.yml` removes the installed Prometheus\Grafana stack.

 