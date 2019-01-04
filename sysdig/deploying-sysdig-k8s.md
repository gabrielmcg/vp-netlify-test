# Deploying Sysdig monitoring on Kubernetes

## Prerequisites

-   Install the `kubectl` binary on your Ansible box - see [https://docs.docker.com/ee/ucp/user-access/kubectl/](https://docs.docker.com/ee/ucp/user-access/kubectl/).
-   Install the UCP Client bundle for the `admin` user - see [https://docs.docker.com/ee/ucp/user-access/cli/](https://docs.docker.com/ee/ucp/user-access/cli/)
-   Confirm that you can connect to the cluster by running a test command, for example, `kubectl get nodes`
-   Ensure that you have configured the required variables, as described in the section [\#sysdig-config-k8s](#sysdig-config-k8s). For example, you add the relevant variables in the `group_vars/vars` file.

    ```
    sysdig_restricted_control_role: 'Restricted Control'
    k8s_cluster: ucp_gab-ucp.cloudra.local
    
    ```

    You should add the access key to the encrypted `group_vars/vault` using the command `ansible-vault edit group_vars/vault`.

    ```
    sysdig_access_key: '10****97-9160-****-9061-84bfd0f****0'
    
    ```


## Running the playbook

```
# cd Docker-SimpliVity
# ansible-playbook -i vm_hosts playbooks/k8s-install-sysdig.yml --vault-password-file .vault_pass

```

Using the Sysdig software as a solution \(SaaS\) website [https://app.sysdigcloud.com](https://app.sysdigcloud.com), you are able to view, analyze and inspect various different dashboards. Initially, you will just see the monitoring information for the infrastructure itself. Deploy a sample application, as detailed in the section [\#](#), and use the Sysdig solution to analyze the different facets of the deployed application.