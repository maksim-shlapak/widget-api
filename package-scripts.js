const { series, rimraf } = require('nps-utils');

module.exports = {
    scripts: {
        default: 'nps doc',
        doc: {
            default: series(
                rimraf('docs'),
                'typedoc lib/ --theme default --plugin typedoc-plugin-external-module-name',
                'open-cli docs/index.html',
            ),
            publish: series(
                rimraf('docs'),
                'typedoc lib/ --platform gitbook --theme markdown --hideSources',
                'node tasks/ghpages.js',
            ),
            json: 'typedoc lib/ --json docs/typedoc.json',
        }
    },
}
