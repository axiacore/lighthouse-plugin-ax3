const {Audit} = require('lighthouse');

class integrationExternal extends Audit {
    /**
     * @return {LH.Audit.Meta}
     */
    static get meta() {
        return {
            title: 'Google Analytics and hotjar',
            failureTitle: 'Lack of integration',
            id: 'integrationExternal.js-id',
            description: 'Integration witch google Analytics and hotjar',
            requiredArtifacts: ['JsUsage'],
        };
    }

    /**
     * @param {LH.Artifacts} artifacts
     * @return {LH.Audit.Product}
     */

    static audit({JsUsage: jsUsage}){
        const integration = Object.keys(jsUsage);
        const itemsType = [];

        let googleAnalytics, hotjar;

        integration.forEach(search => {
            if(search.match(/(?<=\/gtag\/js\?id=)[^&]+/gm)) {
                googleAnalytics = search.match(/(?<=\/gtag\/js\?id=)[^&]+/gm)[0];
                console.log(typeof googleAnalytics);
            } else if(search.match(/(?<=hotjar-)[\d]+/gm)) {
                hotjar = search.match(/(?<=hotjar-)[\d]+/gm)[0];
            }
        });
        console.log(googleAnalytics, hotjar);
        const headings = [
            {Key: 'name', itemType: 'ms', text: 'Name'},
            {Key: 'script', itemType: 'text', text: 'ID'}
        ];

        itemsType.push(
            {name: 'Google Analytics', script: googleAnalytics},
            {name: 'hotjar', script: hotjar});

        return {
            score: 1,
            details: Audit.makeTableDetails(headings,itemsType)
        };
    }
}
module.exports = integrationExternal;
