# Kubernetes configuration

The current playbooks support the deployment of UCP 3.0.\* which deploys Kubernetes version 1.8.\*. This version of the playbooks will not work with a version of UCP lower than version 3. If you wish to deploy using UCP 2.\*, you will need to download the previous release of the playbooks, which is available on the GitHub site.

The preceding section [\#](#) explains how to assign a worker node to the Kubernetes orchestrator. This sections covers specific Kubernetes configuration, including how to set the pod CIDR and how to configure Kubernetes Persistent Volumes.

### Pod CIDR

The variable `k8s_pod_cidr` is specified in `group_vars/vars` and configures a custom range of IP addresses to be used by pods. The specific range you use should be dedicated to the cluster.

The default value is `192.168.0.0/16`. To set an alternative value, use the variable as shown in the example:

```
    k8s_pod_cidr: 192.168.128.0/17
```

## Kubernetes Persistent Volume configuration

Variables related to the configuration of Kubernetes Persistent Volumes are shown in [\#k8s-persistent-volume-config-table-conref](#k8s-persistent-volume-config-table-conref).

|Variable|File|Description|
|:-------|:---|:----------|
|nfs\_provisioner\_role|group\_vars/vars|Name of the role to create, for example, `nfs-provisioner-runner`.|
|nfs\_provisioner\_name|group\_vars/vars|Name of the provisioner, for example, `hpe.com/nfs`|
|nfs\_provisioner\_storage\_class\_name|group\_vars/vars|Name of the storage class to create, for example, `nfs`|
|nfs\_provisioner\_server\_ip|group\_vars/vars|IP address \(or FQDN\) of your external NFS server, for example, `hpe-nfs.cloudra.local`|
|nfs\_provisioner\_server\_share|group\_vars/vars|Name of the NFS share where all the persistent volume data will be stored, for example, `/k8s`|

### Related playbooks

-   `playbooks/k8s-nfs-provisioner.yml` is used to enable a dynamic NFS provisioner which can be used to automatically create and allocate Kubernetes persistent volumes. The backend storage is provided by an NFS backend. This playbook is run from the Ansible box after downloading a UCP client bundle for the `admin` account and sourcing the downloaded `env.sh` file. For more information on using this playbook, see the section [\#](#).
