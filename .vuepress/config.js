module.exports = {
    title: 'Express containers',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: '/blog/' }
        ],
        sidebar: [
            {
                title: 'Express containers',
                collapsable: false,
                children: [
                '/introduction'
                ]
            },
            {
                title: 'Release Notes',
                children: [ '/rel-notes/cve', '/rel-notes/new-features', '/rel-notes/synergy20', '/rel-notes/release-notes', '/rel-notes/configuration-updates' ]
            }
        ]        
    }
}
