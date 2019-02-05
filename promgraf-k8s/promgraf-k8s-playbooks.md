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
The Prometheus Operator makes running Prometheus on top of Kubernetes as easy as possible, while preserving Kubernetes-native configuration options.

The playbook `playbooks/kube-prometheus/operator.yml` installs the operator itself. 

## Kube state metrics
'kube-state-metrics' is a simple service that listens to the Kubernetes API server and generates metrics about the state of the objects. It is not focused on the health of the individual Kubernetes components, but rather on the health of the various objects inside, such as deployments, nodes and pods. For more information on 'kube-state-metrics`, see https://github.com/kubernetes/kube-state-metrics

The playbook `playbooks/kube-prometheus/kube-state-metrics.yml` installs on all UCP, DTR and Kubernetes worker nodes.

## Node exporter
The `node-exporter` provides an overview of cluster node resources including CPU, memory and disk utilization and more.

The playbook `playbooks/kube-prometheus/node-exporter.yml` installs `node-exporter` as a set of Docker containers on all UCP, DTR and Kubernetes worker nodes. Port `9100` is opened in the firewall on each node where it is installed.

## Monitors
While all the other Kubernetes components run on top of Kubernetes itself, `kubelet` and `apiserver` do not, amd so they just need monitors to 

The playbook `playbooks/kube-prometheus/monitors.yml` installs Service Monitors for `kubelet` and `apiserver`.

Note that because Docker EE provides a hosted version of Kubernetes, it is not possible to monitor `kube-scheduler` and `kube-controller-manager`.


## Prometheus


## Grafana