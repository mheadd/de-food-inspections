# Delaware Food Safety Inspection Data Scraper

## Usage

* Clone this repo.
* Install dependencies: ```cd de-food-inspections && npm install```
* Invoke script and pass in URL of web page to scrape:

```
node index.js "http://www.dhss.delaware.gov/dhss/dph/hsp/Default.aspx?startLetter=a&stopLetter=a&sort=Establishment"
```

Output:

```csv
Establishments,Address,City,Zip,County,Type,Date,Violations/COS
"A & G Steak Out","501 West 9th Street","Wilmington","19801","New Castle County","Routine","04/26/2007","3-501.17"
"A & G Steak Out","501 West 9th Street","Wilmington","19801","New Castle County","Routine","05/14/2008","3-501.17 /No"
"A & G Steak Out","501 West 9th Street","Wilmington","19801","New Castle County","Other","03/09/2009","None"
"A & G Steak Out","501 West 9th Street","Wilmington","19801","New Castle County","Routine","04/07/2010","None"
"A & G Steak Out","501 West 9th Street","Wilmington","19801","New Castle County","Routine","07/14/2010","3-501.16 /Yes"
"A & G Steak Out","501 West 9th Street","Wilmington","19801","New Castle County","Routine","01/11/2011","None"
"A & G Steak Out","501 West 9th Street","Wilmington","19801","New Castle County","Routine","10/04/2011","3-301.11 /No, 3-302.11 /No"
...
```

To save CSV data, redirect output to a file.

```
node index.js [URL] > my-new-file.csv
```