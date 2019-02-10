# Validating the NFS provisioner using WordPress and MySQL


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

