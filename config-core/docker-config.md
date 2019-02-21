# Docker configuration

All Docker-related variables are mandatory and are described in the following table.

|Variable|File|Description|
|:-------|:---|:----------|
|docker\_ee\_url|**group\_vars/vault**|Note: This is a private link to your Docker EE subscription. The value for `docker_ee_url` is the URL documented at the following address: [https://docs.docker.com/engine/installation/linux/docker-ee/rhel/](https://docs.docker.com/engine/installation/linux/docker-ee/rhel/).|
|docker\_ee\_reponame|group\_vars/vars|For Docker EE 2.1, this variable should be set to the value `stable-18.09`|
|rhel\_version|group\_vars/vars|For the Docker installation, this sets the version of your RHEL OS, such as `7.6`. The playbooks were tested with RHEL 7.6.|
|dtr\_version|group\_vars/vars|Version of the Docker DTR you wish to install. You can use a numeric version or `latest` for the most recent one. The playbooks were tested with 2.6.2|
|ucp\_version|group\_vars/vars|Version of the Docker UCP you wish to install. You can use a numeric version or `latest` for the most recent one. The playbooks were tested with UCP 3.1.3.|
|images\_folder|group\_vars/vars|Directory in the NFS server that will be mounted in the DTR nodes and that will host your Docker images.|
|license\_file|group\_vars/vars|Full path to your Docker EE license file on your Ansible host. The license file is available from the Docker Store|
|ucp\_username|group\_vars/vars|Username of the administrator user for UCP and DTR, typically `admin`.|
|ucp\_password|**group\_vars/vault**|The password for the `ucp_username` account.|
|docker\_storage\_driver|group\_vars/vars|Storage driver for Docker nodes. Accepted values are `overlay2` \(the default\) and `devicemapper`.|

To see how to use customer-supplied certificates with UCP and DTR, see Appendix B.
