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
        
        //console.log(Object.keys(jsUsage))
        const integration = Object.keys(jsUsage)
        let googleAnalytics, hotjar
        integration.forEach(search => {
          if(search.match(/(?<=\/gtag\/js\?id=)[^&]+$/)){
            googleAnalytics = search.match(/(?<=\/gtag\/js\?id=)[^&]+$/)[0]
          }else if(search.match(/(?<=hotjar-)[\d]+/)){
            hotjar = search.match(/(?<=hotjar-)[\d]+/)[0]
          }
        })
        console.log(googleAnalytics, hotjar)
        const headings = [
          {Key: 'Type', itemType: 'text', text: 'googleAnalytics'},
          {Key: 'Result', itemType: 'text', text: 'hotjar'}      
      ];

      return {
        score: 1,
        details: Audit.makeTableDetails(headings)
    };
       
   
    }
}
module.exports = integrationExternal;