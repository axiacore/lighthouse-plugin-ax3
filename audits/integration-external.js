const {Audit} = require('lighthouse');

class integrationExternal extends Audit {
    /**
     * @return {LH.Audit.Meta}
     */
    static get meta() {
        return {
            title: 'Integration Google Analytics and hotjar',
            failureTitle: 'it is not integrated with Google Analytics, hotjar or google Optimize',
            id: 'integration-external.js-id',
            description: 'Integration Id with google Analytics, hotjar and Google Optimize',
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

        let googleAnalytics, hotjar, displayValue, optimize;

        integration.forEach(search => {
            if(search.match(/(?<=\/gtag\/js\?id=)(UA)[^&]+/gm)) {
                googleAnalytics = search.match(/(?<=\/gtag\/js\?id=)(UA)[^&]+/gm)[0];
            } else if(search.match(/(?<=hotjar-)[\d]+/gm)) {
                hotjar = search.match(/(?<=hotjar-)[\d]+/gm)[0];
            } else if(search.match(/(?<=\/gtm\/js\?id=)(GTM)[^&]+/gm)){
                optimize = search.match(/(?<=\/gtm\/js\?id=)(GTM)[^&]+/gm)[0];
            }
        });

        if(googleAnalytics == undefined){
            displayValue == 'Failed integration with Google Analytics';
        } else if(hotjar == undefined){
            displayValue == 'Failed integration with Google hotjar';
        }   else if(optimize == undefined){
            displayValue == 'Failed integration with Google hotjar';
        }
        /** @type {LH.Audit.Details.Table['headings']} */
        const headings = [
            {text: ('- Google Analytics ID = '+ googleAnalytics)},
            {text: ('- Hotjar ID = '+ hotjar)},
            {text: ('- Optimize ID = '+ optimize)}
        ];

        itemsType.push(
            {name: googleAnalytics },
            {name: hotjar}
        );

        const details = Audit.makeTableDetails(headings, itemsType);

        return {
            score: (googleAnalytics == undefined || hotjar == undefined || optimize == undefined) ? 0 : 1,
            details,
            displayValue,
        };
    }
}
module.exports = integrationExternal;
