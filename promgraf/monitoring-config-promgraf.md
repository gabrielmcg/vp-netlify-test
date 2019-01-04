# Prometheus and Grafana configuration

All Monitoring-related variables for Prometheus and Grafana are described in [\#monitoring-config-table-conref](#monitoring-config-table-conref). The variables determine the versions of various software tools that are used and it is recommended that the values given below are used.

|Variable|Description|
|:-------|:----------|
|cadvisor\_version| `v0.28.3` |
|node\_exporter\_version| `v1.15.0` |
|prometheus\_version| `v2.3.2` |
|grafana\_version| `5.2.3` |
|prom\_persistent\_vol\_name|The name of the volume which will be used to store the monitoring data. The volume is created using the vSphere Docker Volume plugin.|
|prom\_persistent\_vol\_size|The size of the volume which will hold the monitoring data. The exact syntax is dictated by the vSphere Docker Volume plugin. The default value is 10GB.|