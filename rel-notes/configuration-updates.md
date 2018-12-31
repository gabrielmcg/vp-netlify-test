# Configuration updates

New variables and configuration files introduced in this release of Docker-SimpliVity:

-   `docker_ee_reponame` variable in `group_vars/vars` replaces `docker_ee_version` - see [\#](#) 
-   `docker_ee_version_windows` variable in `group_vars/vars` - see [\#](#)
-   `docker_storage_driver` variable in `group_vars/vars` - see [\#](#) 
-   `windows_update` variable in `group_vars/vars` - see [\#](#)
-   `windows_winrm_script` variable in `group_vars/vars` - see [\#](#)

Recently added variables and configuration files inherited from the underlying Docker-Synergy release:

-   `splunk_uf_password` variable in `group_vars/vault` - see [\#](#)
-   `orchestrator` variable in `vm_hosts` - see [\#](#)
-   `k8s_pod_cidr` variable in `group_vars/vars` - see [\#](#)
-   Additional configuration files for each group in the inventory including `group_vars/vms.yml`, `group_vars/ucp.yml`, `group_vars/dtr.yml`, `group_vars/worker.yml` and `group_vars/nfs.yml` - see [\#](#).
