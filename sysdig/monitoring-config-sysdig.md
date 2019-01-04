# Sysdig configuration

## Sysdig configuration for Docker swarm

|Variable|File|Description|
|:-------|:---|:----------|
|sysdig\_access\_key|**group\_vars/vault**|After the activation of your account on the Sysdig portal, you will be provided with your access key which will be used by the playbooks to install the agent on each UCP, DTR and Linux worker node, as well as the NFS, logger and load balancer VMs.|
|sysdig\_agent|group\_vars/vars|Specifies the URL to the Sysdig Linux native install agent, for example, `https://s3.amazonaws.com/download.draios.com/stable/install-agent`|
|sysdig\_tags|group\_vars/vars|Tagging your hosts is highly recommended. Tags allow you to sort the nodes of your infrastructure into custom groups in Sysdig Monitor. Specify location, role, and owner in the format: `'location:City,role:Enterprise CaaS,owner:Customer Name'`|

## Sysdig configuration for Kubernetes

|Variable|File|Description|
|:-------|:---|:----------|
|sysdig\_access\_key|**group\_vars/vault**|After the activation of your account on the Sysdig portal, you will be provided with your access key which will be used by the playbooks to install the agent on each UCP, DTR and Linux Kubernetes worker node.|
|sysdig\_restricted\_control\_role|group\_vars/vars|The Sysdig service account requires the 'Restricted Control' grant. So this value will typically be set as follows: ```
**sysdig\_restricted\_control\_role: 'Restricted Control'**
```

 |
|k8s\_cluster|group\_vars/vars|This should match the cluster name displayed when you source the environment setup script, for example. ```
# source env.sh
Cluster "**ucp\_hpe-ucp.cloudra.local**:6443_admin" set.
User "ucp_hpe-ucp.cloudra.local:6443_admin" set.

```

 For more information, see the section on installing the UCP client bundle in [\#](#),|
