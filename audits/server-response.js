const {Audit} = require('lighthouse');

class response_server extends Audit {
    /**
     * @return {LH.Audit.Meta}
     */
    static get meta() {
        return {
            title: 'tes QA ',
            id: 'server-response.js-id',
            failureTitle: 'time greater than 6 sec',
            description: 'charging time must be less than 6 seconds',
            requiredArtifacts: ['devtoolsLogs', 'URL'],
        };
    }

    /**
     * @param {LH.Artifacts} artifacts
     * @return {LH.Audit.Product}
     */

     static audit({devtoolsLogs: devtoolsLog}) {

     }
 }
 module.exports = response_server;