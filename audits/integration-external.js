const {Audit} = require('lighthouse');

class integrationExternal extends Audit {
    /**
     * @return {LH.Audit.Meta}
     */
    static get meta() {
        return {
            title: 'Google Analytics and hotjar',
            failureTitle: 'Lack of integration',
            id: 'integration-external.js-id',
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

        let googleAnalytics, hotjar, displayValue;

        integration.forEach(search => {
            if(search.match(/(?<=\/gtag\/js\?id=)[^&]+/gm)) {
                googleAnalytics = search.match(/(?<=\/gtag\/js\?id=)[^&]+/gm)[0];
            } else if(search.match(/(?<=hotjar-)[\d]+/gm)) {
                console.log(search);
                hotjar = search.match(/(?<=hotjar-)[\d]+/gm)[0];
                console.log(hotjar);
            }
        });

        if(googleAnalytics == undefined){
            displayValue == 'No integration Google Analytics';
        } else if(hotjar == undefined){
            displayValue == 'No integration Google hotjar';
        }
        /** @type {LH.Audit.Details.Table['headings']} */
        const headings = [
            {Key: 'name', itemType: 'text', text: 'Name'},
            {Key: 'script', itemType: 'text', text: 'ID'}
        ];

        itemsType.push(
            {name: 'Google Analytics', script: googleAnalytics},
            {name: 'Hotjar', script: hotjar}
        );
        const details = Audit.makeTableDetails(headings, itemsType);

        return {
            score: (googleAnalytics == undefined || hotjar == undefined) ? 0 : 1,
            details,
            displayValue,
        };
    }
}
module.exports = integrationExternal;
