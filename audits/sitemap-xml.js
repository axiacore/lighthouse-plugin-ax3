const {Audit} = require('lighthouse');

class siteMap extends Audit {
    /**
     * @return {LH.Audit.Meta}
     */
    static get meta() {
        return {
            title: 'Sitemap.xml',
            id: 'sitemap-xml.js-id',
            description: 'Check file sitemap.xml',
            requiredArtifacts: ['URL'],
        };
    }

    /**
     * @param {LH.Artifacts} artifacts
     * @return {LH.Audit.Product}
     */
    static audit({URL: url}){

        let urlSitemap = url.finalUrl;
        urlSitemap = (urlSitemap + 'sitempa.xml');
        console.log( urlSitemap);
    }

}
module.exports = siteMap;
