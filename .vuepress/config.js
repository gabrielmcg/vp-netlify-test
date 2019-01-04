module.exports = {
    title: 'Express containers',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/' }
        ],
        sidebar: [
			'/introduction',
            {
                title: 'Release notes',
				collapsable: true,
                children: [ 
				'/rel-notes/cve', 
				'/rel-notes/new-features', 
				'/rel-notes/synergy20',  
				'/rel-notes/configuration-updates',
				'/rel-notes/fixed-release-svt.md'
				]
            },
            {
                title: 'Solution overview',
                children: [ 
				'soln-overview/svt-solution-overview',	
                'soln-overview/svt-config',				
				'soln-overview/solution-config',
				'soln-overview/sizing',
				'soln-overview/disaster-recovery',
				'soln-overview/security'
				]
			},
			{
                title: 'Solution components',
                children: [ 
				'soln-components/hardware',
				'soln-components/software',
				'soln-components/application-software'
				]
			},			
			{
                title: 'Preparing the environment',
                children: [ 
				'prep/verify-prereqs',
				'prep/vsphere-ha',
				'prep/install-vdvs',
				'prep/create-ansible-node'
				]
			},
			{
                title: 'Configuring the core components',
                children: [ 
				'config-core/ansible-config',
				'config-core/edit-inventory',
				'config-core/vmware-config',
				'config-core/svt-variables-config',
				'config-core/svt-backup-config',
				'config-core/network-config',
				'config-core/environment-config',
				'config-core/docker-config',
				'config-core/orchestrator-config',
				'config-core/k8s-config',
				'config-core/edit-vault',
				'config-core/inventory-group-variables',
				]
			},
			{
                title: 'Overview of the playbooks',
                children: [ 
				'playbooks/playbooks-overview.md',
				'playbooks/core-infrastructure.md',
				'playbooks/optional-playbooks.md',
				'playbooks/backup-restore-playbooks.md',
				'playbooks/convenience-playbooks.md',
				'playbooks/convenience-scripts.md'
				]
			},
			{
                title: 'Deploying the core components',
                children: [ 
				'deploy/running-playbooks'
				'deploy/create-rhel-vms',
				'deploy/load-balancers',
				'deploy/install-docker-ucp-dtr',
				'deploy/add-rhel-workers',
				'deploy/svt-backup-playbooks'
				]
			}
				
				
        ]        
    }
}
