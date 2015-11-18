// Include required modules.
var request = require('request');
var cheerio = require('cheerio');

// The URL to the web page we want to scrape.
var URL = process.argv[2];

// Output a header row.
console.log("Establishments,Address,City,Zip,County,Type,Date,Violations/COS");

// Make the request and scrape page.
request(URL, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    $=cheerio.load(body, {normalizeWhitespace: true});
	$('.datagridItem, .datagridAlternatingItem').each(function(i, elem) {
		
		// Instantiate an empty array
		var row = [];

		// For each column in the table row, 
		$(this).children('td').each(function(j, elem) {
			row.push('"' + $(this).text().replace(/^\s+|\s+$/g,'') + '"');
		});

		// Join the array for each row using ',' delimeter
		data = row.join(',');

		// Output the row.
		console.log(data);
	});
  }
  else {
  	console.log('Error fetching page.')
  }
});