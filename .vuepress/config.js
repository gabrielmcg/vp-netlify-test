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
                children: [ '/rel-notes/configuration-updates' ]
            }
        ]        
    }
}
