module.exports = {
    audits: [
        {path: 'lighthouse-plugin-ax3/audits/search-anchors.js'},
        {path: 'lighthouse-plugin-ax3/audits/url-social.js'},
        {path: 'lighthouse-plugin-ax3/audits/favicon-icon.js'}
    ],
    category: {
        title: 'AX3',
        description:
            'Lighthouse plugin to audit Axiacore projects',
        auditRefs: [
            {id: 'search-anchors.js-id', weight: 1, group: 'links' },
            {id: 'url-social.js-id', weight: 3, group: 'links'},
            {id: 'favicon-icon.js-id', weight: 1, group: 'image'}
        ],
    },
    groups: {
        'links': {
            title: 'Verification_htlm',
            description: 'Check the html and social networks',
        },
        'image': {
            title: 'Image',
            description: 'Image',
        }
    }
};
