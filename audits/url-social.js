const {Audit} = require('lighthouse');

class EmptyAnchors extends Audit {
    /**
     * @return {LH.Audit.Meta}
     */
    static get meta() {
        return {
            id: 'url-social.js-id',
            title: 'Url Social',
            description: 'Social Media',
            requiredArtifacts: ['AnchorElements'],
            scoreDisplayMode: 'notApplicable'
        };
    }

    /**
     * @param {LH.Artifacts} artifacts
     * @return {LH.Audit.Product}
     */
    static audit({AnchorElements: anchorElements}) {
        const amountElements = anchorElements; 
        const urlSocials = anchorElements.filter(({href}) => {
            if (/(twitter.com.)|(instagram.com.)|(facebook)/gi.exec(href)) return true;
        });
        const headings = [{
            key: 'node',
            itemType: 'node',
            text: 'Links',
        }];
        const itemsToDisplay = urlSocials.map(anchor => {
            return {
                node: Audit.makeNodeItem(anchor.node),
            };
        });
        return {
            score: null,
            scoreDisplayMode: 'informative',
            details: Audit.makeTableDetails(headings, itemsToDisplay),
        };
    }
}
module.exports = EmptyAnchors;
