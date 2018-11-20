const ghpages = require('gh-pages');


const repo = 'https://github.com/Annoto/widget-api.git';

ghpages.publish('docs', {
    repo,
}, (err) => {
    if (err) {
        return console.error(err);
    }

    console.log('gh-pages: published to ', repo);
});