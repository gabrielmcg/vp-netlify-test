# HPE SimpliVity backup configuration

Variables related to configuring HPE SimpliVity backups are described in [\#svt-backup-variables-table-content](#svt-backup-variables-table-content).

|Variable|File|Description|
|:-------|:---|:----------|
|backup\_policies|group\_vars/vault|List of dictionaries containing the different backup policies to be used along with the scheduling information. Any number of backup policies can be created and they need to match the node\_policy variables defined in the inventory. Times are indicated in minutes. All month calculations use a 30-day month. All year calculations use a 365-day year. The format is as follows: ```

backup_policies:
 - name: daily'   
   days: 'All'   
   start_time: '11:30'   
   frequency: '1440'   
   retention: '10080' 
 - name: 'hourly'   
   days: 'All'   
   start_time: '00:00'   
   frequency: '60'   
   retention: '2880'

```

 |
|dummy\_vm\_prefix|group\_vars/vault|In order to be able to backup the Docker volumes, a number of "dummy" VMs need to spin up. This variable will set a recognizable prefix for them.|
|docker\_volumes\_policy|group\_vars/vault|Backup policy to use for the Docker volumes.|
