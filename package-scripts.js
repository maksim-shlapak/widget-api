const { series, rimraf } = require('nps-utils');

module.exports = {
    scripts: {
        default: 'nps doc',
        doc: {
            default: series(
                rimraf('docs'),
                'typedoc lib/ --theme default',
                'opn docs/index.html',
            ),
            publish: series(
                rimraf('docs'),
                'typedoc lib/',
                'node tasks/ghpages.js',
            ),
            json: 'typedoc lib/ --json docs/typedoc.json',
        }
    },
}
