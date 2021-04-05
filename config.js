module.exports = {
    extends: 'lighthouse:default',
    plugins: [
        'lighthouse-plugin-field-performance',
        'lighthouse-plugin-ax3',
    ],
    settings: {
        psiToken: '',
    },
};
