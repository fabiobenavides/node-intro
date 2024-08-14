const querystring = require('querystring');

const url = 'https://www.example.com/p/a/t/h?course=node&lesson=http';

const queryParts = url.split('?');
const queryToParse = queryParts[1];
console.log(queryToParse);
const parsedQuery = querystring.parse(queryToParse);
console.log(parsedQuery);
var modifiedQueryString = queryToParse + '&exercise=querystring';
console.log('--');
console.log(modifiedQueryString);
