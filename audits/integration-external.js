const {Audit} = require('lighthouse');

class integrationExternal extends Audit {
    /**
     * @return {LH.Audit.Meta}
     */
    static get meta() {
        return {
            title: 'Integration Google Analytics and hotjar',
            failureTitle: 'it is not integrated with Google Analytics or hotjar',
            id: 'integration-external.js-id',
            description: 'Integration Id with google Analytics and hotjar',
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
                hotjar = search.match(/(?<=hotjar-)[\d]+/gm)[0];
            }
        });

        if(googleAnalytics == undefined){
            displayValue == 'Failed integration with Google Analytics';
        } else if(hotjar == undefined){
            displayValue == 'Failed integration with Google hotjar';
        }
        /** @type {LH.Audit.Details.Table['headings']} */
        const headings = [
            {text: ('Google Analytics ID = '+ googleAnalytics)},
            {text: ('Hotjar ID = '+ hotjar)}
        ];

        itemsType.push(
            {name: googleAnalytics },
            {name: hotjar}
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
