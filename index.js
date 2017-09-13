const _ = require('lodash');
const data = require('./data');
const scrape = require('website-scraper');

const parts = _.flatten(_.values(data));
const urls = _.map(parts, (part) => {
    return 'https://miiverse.nintendo.net/' + part;
});

const scrapeOptions = {
    urls: urls,
    filenameGenerator: 'bySiteStructure',
    directory: './out',
};

scrape(scrapeOptions, (error, result) => {
    console.log(error);
    // console.log(result);
});
