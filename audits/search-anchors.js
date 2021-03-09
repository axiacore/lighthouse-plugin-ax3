const {Audit} = require('lighthouse');

class EmptyAnchors extends Audit {
    /**
     * @return {LH.Audit.Meta}
     */
    static get meta() {
        return {
            id: 'search-anchors.js-id',
            title: 'Search Url',
            failureTitle: 'has empty urls',
            description: 'Empty urls ',
            requiredArtifacts: ['AnchorElements'],
            //scoreDisplayMode: 'numeric'
        };
    }

    /**
     * @param {LH.Artifacts} artifacts
     * @return {LH.Audit.Product}
     */
    static audit({AnchorElements: anchorElements}) {
        const amountElements = anchorElements;
        const failingAnchors = anchorElements.filter(({rawHref}) => {
            if (rawHref === ''|| rawHref ==='#') return true;
        });
        const headings = [{
            key: 'node',
            itemType: 'node',
            text: 'Links',
        }];
        const itemsToDisplay = failingAnchors.map(anchor => {
            return {
                node: Audit.makeNodeItem(anchor.node),
            };
        });
        return {
            score: (amountElements.length - failingAnchors.length) / amountElements.length,
            details: Audit.makeTableDetails(headings, itemsToDisplay),
        };
    }
}
module.exports = EmptyAnchors;
