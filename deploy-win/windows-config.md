# Windows configuration

Window-related variables are shown in [\#windows-config-table-conref](#windows-config-table-conref).

|Variable|File|Description|
|:-------|:---|:----------|
|win\_vm\_template|group\_vars/vars|Name of the Windows 2016 VM Template to use. Note that this is the name from a vCenter perspective, not the hostname.|
|win\_username|group\_vars/vars|Windows user name. The default is `Administrator` |
|win\_password|**group\_vars/vault**|The password for the Windows account.|
|windows\_vdvs\_ps|group\_vars/vars|Variable used to download the PowerShell script that is used to install vDVS for Windows. For example, `https://raw.githubusercontent.com/vmware/vsphere-storage-for-docker/master/install-vdvs.ps1` |
|windows\_vdvs\_path|group\_vars/vars|Variable used to download vSphere Docker Volume Service software. This variable is combined with `windows_vdvs_version` \(below\) to generate a URL of the form `<windows_vdvs_path>_<windows_vdvs_version>.zip` to download the software. For example, to download version 0.21, set `windows_vdvs_path` equal to `https://vmware.bintray.com/vDVS/vsphere-storage-for-docker_windows` and `windows_vdvs_version` equal to `0.21` |
|windows\_vdvs\_version|group\_vars/vars|Combined with `windows_vdvs_path`, this variable is used to generate the URL for downloading the software.|
|windows\_vdvs\_directory|group\_vars/vars|Variable used to determine where vDVS software will be unzipped and installed from. The default is `C:\Users\Administrator\Downloads`|
|windows\_winrm\_script|group\_vars/vars|Variable used to determine where the `winrm` Powershell script will be downloaded from. See the section [\#](#) for more information.|
|docker\_ee\_version\_windows|**group\_vars/vars**|It is important that the version of the Docker engine running on your Windows worker nodes is the same as that running on RHEL in the rest of your cluster. You should use this variable to explicitly match up the versions. For Docker 2.0, the recommended value is `'17.06'`. If you do not explicitly set this value, you may end up with an incompatible newer version running on your Windows workers.|
|windows\_update|group\_vars/vars|Variable used to determine if Windows updates are automatically downloaded when installing Docker on Windows worker nodes \(in the `playbooks/install_docker.yml`\). Defaults to `true`. See the section [\#](#) for more information.|

## group_vars/win_worker.yml

There is a separate file in the `group_vars` directory named `win_worker.yml` for advanced, Windows-specific configuration. These variables are used in the following playbooks:

-   playbooks/create\_windows\_vms.yml
-   playbooks/install\_docker\_window.yml
-   playbooks/scale\_workers\_win.yml

In general, it should not be necessary to modify this file, but the variables are documented in [\#windows-advanced-config-table-content](#windows-advanced-config-table-content) for the sake of completeness.

|Variable|File|Description|
|:-------|:---|:----------|
|ansible\_user|**group\_vars/win\_worker.yml**|Defaults to the Windows user account `win_username` as specified in `group_vars/vars` |
|ansible\_password|**group\_vars/win\_worker.yml**|Defaults to the Windows user password `win_password` as specified in `group_vars/vault`|
|ansible\_port|**group\_vars/win\_worker.yml**|5986|
|ansible\_connection|**group\_vars/win\_worker.yml**|winrm|
|ansible\_winrm\_server\_cert\_validation|**group\_vars/win\_worker.yml**|Defaults to `ignore`|
|ansible\_winrm\_operation\_timeout\_sec|**group\_vars/win\_worker.yml**|Defaults to `250`|
|ansible\_winrm\_read\_timeout\_sec|**group\_vars/win\_worker.yml**|Defaults to `300`|
|windows\_timezone|**group\_vars/win\_worker.yml**|Defaults to `15`|
