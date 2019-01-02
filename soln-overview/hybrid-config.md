# Hybrid VM configuration \(Windows and Linux\)

-   3 Docker swarm Windows worker VM nodes for container workloads \(optional\). Kubernetes is not yet supported for Windows workers.

The hybrid deployment will typically add 3 Windows worker nodes to the above configuration, co-located with the Linux workers.

**Note:** Some of the application software supported by this configuration does not currently run on Windows, for example, the Sysdig Software Agent \(see the section [\#](#)\).
