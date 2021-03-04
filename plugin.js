module.exports = {
    audits: [{path: 'lighthouse-plugin-ax3/audits/search-anchors.js'},
    {path: 'lighthouse-plugin-ax3/audits/url-social.js'}],

    category: {
        title: 'AX3',
        description:
            'Lighthouse plugin to audit Axiacore projects',
        auditRefs: [{id: 'search-anchors.js-id', weight: 1},
        {id: 'url-social.js-id', weight: 1}],
    },
};
