const { series, rimraf, open } = require('nps-utils');

module.exports = {
    options: {
        'help-style': 'basic',
    },
    scripts: {
        default: 'nps help',
        build: {
            script: series(
                rimraf('dist'),
                'tsc',
            ),
            description: 'Build the interfaces',
        },
        doc: {
            html: {
                script: series(
                    rimraf('docs'),
                    'typedoc lib/ --theme default --watch',
                    open('docs/index.html')
                ),
                description: 'Generate HTML documentation for preview using typedoc and open the result in a browser.',
            },
            publish: {
                script: series(
                    rimraf('docs'),
                    'typedoc lib/ --theme default',
                    'node tasks/ghpages.js',
                ),
                description: 'Generate HTML ducumentation using typedoc and publish to github pages using tasks/ghpages.js task.',
            },
            json: {
                script: series(
                    'nps build',
                    rimraf('docs'),
                    'typedoc lib/ --json docs/typedoc.json'
                ),
                description: 'Generate json file of the ducumentation using typedoc.',
            },
        }
    },
}
