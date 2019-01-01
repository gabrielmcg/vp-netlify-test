module.exports = {
    title: 'Express containers',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/' }
        ],
        sidebar: [
            {
                title: 'Deployment Guide',
                collapsable: false,
                children: [
                '/introduction'
                ]
            },
            {
                title: 'Release Notes',
				collapsable: false,
                children: [ 
				'/rel-notes/cve', 
				'/rel-notes/new-features', 
				'/rel-notes/synergy20',  
				'/rel-notes/configuration-updates',
				'/rel-notes/fixed-release-svt.md'
				]
            },
            {
                title: 'Solution Overview',
                children: [ 
				'soln-overview/svt-solution-overview',
				'soln-overview/svt-config',
				'soln-overview/linux-config'
				]
			}
        ]        
    }
}
