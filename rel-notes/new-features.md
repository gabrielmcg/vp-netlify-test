# New features

This release of the Docker-SimpliVity playbooks is based on the recent release of the corresponding Docker-Synergy playbooks with some specific additions:

-   **Load balancers:** The playbooks now support load balancers based on VRRP, using `HAproxy` and `keepalived`. The solution can be deployed using these loadbalancers, external load balancers, no load balancers or the legacy version of standalone load balancers.
-   **Default storage driver:** The default storage driver is now `overlay2`, as recommended by Docker. Previously, the `devicemapper` was configured in `direct-lvm` mode.
-   **Windows workers behind proxy:** Windows worker nodes can now be deployed behind a proxy. Simple HTTP proxy support is provided and the playbooks do not support any type of authentication with the proxy \(on either RHEL or Windows nodes\).
-   **Windows boot drive:** The OS partition of Windows worker nodes is now resized to occupy all the boot disk, whereas, previously, there would have been some unallocated space.
