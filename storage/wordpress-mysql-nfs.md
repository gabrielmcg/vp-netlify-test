# Validating the NFS provisioner using WordPress and MySQL

A sample playbook has been provided to show how to use the NFS provioner for perstent storage for a WordPress and MySQL deployment.

## Prerequisites

-   Install the `kubectl` binary on your Ansible box
-   Install the UCP Client bundle for the `admin` user
-   Confirm that you can connect to the cluster by running a test command, for example, `kubectl get nodes`
-   Deploy the NFS provisioner as outlined in the preceeding section. The article assumes that the NFS 
configuration is the same as used in that section, namely:

|Variable|Value|
|:-------|:----|
|nfs\_provisioner\_role|`nfs-provisioner-runner`|
|nfs\_provisioner\_name|`hpe.com/nfs`|
|nfs\_provisioner\_storage\_class\_name|`**nfs**`|
|nfs\_provisioner\_server\_ip|`hpe-nfs.cloudra.local`|
|nfs\_provisioner\_server\_share|`/k8s`|


## Running the playbook

The playbook `test/playbooks/wordpress-mysql-nfs.yml` creates Persistent Volume Claims for both `Wordpress` and `MySQL`, deploys both applications and makes the `WordPress` UI available via a NodePort. 

```
# cd ~/Docker-SimpliVity
#  ansible-playbook -i vm_hosts ./test/playbooks/wordpress-mysql-nfs.yml --vault-password-file .vault_pass
```

The output shows the components created along with the NodePort for the `wordpress` service.

```
ok: [localhost] => {
    "ps.stdout_lines": [
        "Cluster \"ucp_hpe2-ucp01.am2.cloudra.local:6443_admin\" set.",
        "User \"ucp_hpe2-ucp01.am2.cloudra.local:6443_admin\" set.",
        "Context \"ucp_hpe2-ucp01.am2.cloudra.local:6443_admin\" modified.",
        "namespace/wordpress-mysql created",
        "secret/mysql-pass created",
        "persistentvolumeclaim/mysql-pv-claim created",
        "persistentvolumeclaim/wp-pv-claim created",
        "deployment.apps/wordpress-mysql created",
        "deployment.apps/wordpress created",
        "service/wordpress-mysql created",
        "service/wordpress created",
        "NAME              TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)        AGE",
        "wordpress         NodePort    10.96.216.103   <none>        80:33790/TCP   0s",
        "wordpress-mysql   ClusterIP   None            <none>        3306/TCP       0s"
    ]
```

Browse to the specified port on any node in your cluster.

```
http://hpe2-ucp01.am2.cloudra.local:33790
```

You need to configure the language and password before WordPress is ready to use.


!["Configure WordPress language"][media-wordpress-install-1-png]

**Figure.** Configure WordPress language


!["Configure WordPress password"][media-wordpress-install-2-png]

**Figure.** Configure WordPress language

Log in to WordPress, with the user name and password you have just set up.

!["Configure WordPress password"][media-wordpress-install-2-png]

**Figure.** Configure WordPress language


[media-wordpress-install-1-png]:<../media/wordpress-install-1.png> "Figure. Configure WordPress language"
[media-wordpress-install-2-png]:<../media/wordpress-install-2.png> "Figure. Configure WordPress password"
[media-wordpress-install-2-png]:<../media/wordpress-install-2.png> "Figure. WordPress login"









