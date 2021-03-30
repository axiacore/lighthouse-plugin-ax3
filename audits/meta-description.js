const {Audit} = require('lighthouse');

class titleDescription extends Audit {
    /**
     * @return {LH.Audit.Meta}
     */
    static get meta() {
        return {
            id: 'meta-description.js-id',
            title: 'Meta title and description',
            description: 'check the meta title and description',
            requiredArtifacts: ['MetaElements']
        };
    }

    /**
     * @param {LH.Artifacts} artifacts
     * @return {LH.Audit.Product}
     */
    static audit({MetaElements: metaElements}) {
        console.log(metaElements);
        const metaTitle = metaElements.filter(({property}) => {
            if (property === 'og:title'| property ==='og:description' | property ==='og:image') return true;
        });

        const headings = [
            {key: 'meta', itemType: 'text', text: 'Meta Title - Description'},
        ];
        let itemsTitle = metaTitle.map(metaText => {
            return {
                meta: metaText.content,
            };
        });

        return {
            score: 1,
            details: Audit.makeTableDetails(headings, itemsTitle),
        };
    }
}
module.exports = titleDescription;
