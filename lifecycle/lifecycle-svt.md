# HPE SimpliVity environment

The HPE SimpliVity environment is made up of proprietary HPE SimpliVity software, VMware software and HPE firmware. There are interdependencies between the various components that need to be accounted for and are provided in the table below. The components in [\#svt-components-table-content](#svt-components-table-content) are part of the HPE SimpliVity environment that require lifecycle management.

In general, ensure that the software bits for the Arbiter and vSphere extension corresponding to an OmniStack release are used.

|Order|Component|Dependency \(compatibility\)|Download/Documentation|
|:----|:--------|:---------------------------|:---------------------|
|1.|HPE SimpliVity Arbiter|1. HPE OmniStack|HPE SimpliVity OmniStack for vSphere Upgrade Guide Download software bits from HPE’s support website.

 [http://www.hpe.com/support](http://www.hpe.com/support)

 |
|2.|HPE SimpliVity VMware Plug-in|1. HPE SimpliVity Arbiter 2. HPE OmniStack

 |
|3.|HPE Omnistack|1. HPE SimpliVity VMware Plug-in 2. HPE SimpliVity Arbiter

 |

## VMware components

The HPE SimpliVity solution used in this deployment guide is built on VMware vSphere. VMware ESXi and vCenter \(see [\#vmware-components-table-content](#vmware-components-table-content)\) are the two components from VMware that are leveraged by the HPE SimpliVity software.

|Order|Component|Dependency \(compatibility\)|Download/Documentation|
|:----|:--------|:---------------------------|:---------------------|
|1.|VMware vCenter|1. HPE OmniStack 2. VMware ESXi

 |[VMware Upgrade for SimpliVity](https://support.hpe.com/hpsc/doc/public/display?sp4ts.oid=1010292248&docLocale=en_US&docId=emr_na-a00028056en_us) |
|1.|VMware ESXi|1. HPE OmniStack 2. VMware vCenter

 |

## HPE server software

HPE SimpliVity servers are based on HPE server platforms and require a compatible firmware version to function with HPE OmniStack Software, as shown in [\#hpe-components-table-content](#hpe-components-table-content).

|Order|Component|Dependency \(compatibility\)|Download/Documentation|
|:----|:--------|:---------------------------|:---------------------|
|1.|HPE Firmware|1. HPE OmniStack|[Firmware Upgrade for HPE SimpliVity](https://support.hpe.com/hpesc/public/home/result?qt=HPE+SimpliVity+380) |