const {Audit} = require('lighthouse');

class faviconIcon extends Audit {
    /**
     * @return {LH.Audit.Meta}
     */
    static get meta() {
        return {
            title: 'Image Favicon',
            id: 'favicon-icon.js-id',
            description: 'Image favicon proyect',
            requiredArtifacts: ['LinkElements','ImageElements'],
        };
    }

    /**
     * @param {LH.Artifacts} artifacts
     * @return {LH.Audit.Product}
     */

     /*static calculateResponseTime(record) {
        const timing = record.timing;
        console.log(timing) 
        return timing ? timing.receiveHeadersEnd - timing.sendEnd : 0;
      }
     
     */ 
    static audit({LinkElements: linkElements}){
        const iconFavicon = linkElements.filter(({rel}) => {
            if(rel == 'icon') return true;
        });
        const headings = [{
            key: 'node', itemType: 'thumbnail', text: 'text'
        }]
        const itemsToDisplay = iconFavicon.map(anchor => {
            return {
                node: Audit.makeNodeItem(anchor.node),
            };
        });
        return {
            score: 1,
            details: Audit.makeTableDetails(headings,itemsToDisplay),
     };
    }
 }
 module.exports = faviconIcon;