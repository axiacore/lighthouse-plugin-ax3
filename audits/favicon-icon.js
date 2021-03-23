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
            requiredArtifacts: ['LinkElements', 'ImageElements'],
        };
    }

    /**
     * @param {LH.Artifacts} artifacts
     * @return {LH.Audit.Product}
     */
    static audit({LinkElements: linkElements}){
        const iconFavicon = linkElements.filter(({rel}) => {
            if(rel == 'icon') return true;
        });
        const headings = [
            {key: 'url', itemType: 'thumbnail', text: 'URL'},
            {key: 'url', itemType: 'url', text: 'Image'}
        ];
        const itemsToDisplay = iconFavicon.map(anchor => {
            return {
                url: anchor.href
            };
        });
        return {
            score: 1,
            details: Audit.makeTableDetails(headings, itemsToDisplay),
        };
    }
}
module.exports = faviconIcon;
