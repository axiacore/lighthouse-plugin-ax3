module.exports = {
    audits: [{path: 'lighthouse-plugin-ax3/audits/search-anchors.js'},

             {path: 'lighthouse-plugin-ax3/audits/url-social.js'},

             {path: 'lighthouse-plugin-ax3/audits/server-response.js'}],

    category: {
        title: 'AX3',
        description:
            'Lighthouse plugin to audit Axiacore projects',
        auditRefs: [{id: 'search-anchors.js-id', weight: 1, group: 'links' },
        
                    {id: 'url-social.js-id', weight: 3, group: 'links'},

                    {id: 'server-response.js-id', weight: 1, group: 'ServerResponse'}],
    },
    groups: {
        'links': {
            title: 'Verification_htlm',
            description: 'Check the html and social networks',
        },
        'ServerResponse': {
            title: 'Response time',
            description: 'Service response time',
        }
    }
};
