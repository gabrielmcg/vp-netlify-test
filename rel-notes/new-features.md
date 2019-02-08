# New features


## Express Containers 2.1

This release of the Docker-SimpliVity playbooks deploys Docker EE 2.1, featuring Kubernetes 1.11.

- **Prometheus/Grafana on Kubernetes:** The playbooks now deploy a full monitoring stack using Prometheus Operator. They install `kube-state-metrics` and `node-exporter` components, as well as supporting Kubelet and Apiserver metrics. Sample dashboards for Grafana are installed to help you monitor your Kubernetes infrastructure.

- **Docker UCP metrics for Kubernetes:** A simple, standalone Prometheus/Grafana deployment is provided to support visualization of UCP metrics. These will be integrated into the full stack deployment in a future release.

-  **Sysdig for Kubernetes:** Updated the Sysdig deployment to use Kubernetes  1.11 RBAC and config maps for sensitive data.

- **NFS Provisioner for Kubernetes:** Updated the NFS Provisioner to use Kubernetes 1.11 RBAC.

- **WordPress and MySQL using NFS Provisioner:** Validation of the NFS Provisioner, featuring a WordPress and MySQL deployment with persistent storage.

- **kubectl:** Convenience playbook to download and install `kubectl`.

- **Client bundle:** Convenience playbook to download and configure the client bundle from UCP.

- **Helm charts:** Added support for Helm, documenting sample charts for validation purposes.



## Express Containers 2.0
This release of the Docker-SimpliVity playbooks is based on the recent release of the corresponding Docker-Synergy playbooks with some specific additions:

-   **Load balancers:** The playbooks now support load balancers based on VRRP, using `HAproxy` and `keepalived`. The solution can be deployed using these loadbalancers, external load balancers, no load balancers or the legacy version of standalone load balancers.
-   **Default storage driver:** The default storage driver is now `overlay2`, as recommended by Docker. Previously, the `devicemapper` was configured in `direct-lvm` mode.
-   **Windows workers behind proxy:** Windows worker nodes can now be deployed behind a proxy. Simple HTTP proxy support is provided and the playbooks do not support any type of authentication with the proxy \(on either RHEL or Windows nodes\).
-   **Windows boot drive:** The OS partition of Windows worker nodes is now resized to occupy all the boot disk, whereas, previously, there would have been some unallocated space.
