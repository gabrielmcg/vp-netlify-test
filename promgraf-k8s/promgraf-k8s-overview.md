# Monitoring Kubernetes with Prometheus and Grafana

The solution uses the Prometheus Operator to deploy Prometheus and Grafana. The playbooks install `kube-state-metrics` and `node-exporter` components, as well as supporting `kubelet` and `apiserver` metrics. Sample dashboards for Grafana are installed to help you monitor your Kubernetes infrastructure.

 ![ "Prometheus Operator"][media-prometheus-operator-jpg] 

 [media-prometheus-operator-jpg]:<../media/prometheus-operator.jpg> "Prometheus Operator"