module.exports = {
    title: 'Express containers',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/' }
        ],
        sidebar: [
            {
                title: '',
				collapsable: false,		
                children: [				
			    '/introduction',
				]
			},
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
				'soln-components/hardware'
				]
			}			
			{
                title: 'Preparing the environment',
                children: [ 
				
				]
			}
        ]        
    }
}
