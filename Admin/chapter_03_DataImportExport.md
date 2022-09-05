
## import Data
  - before importing data must be converted to .csv format.

***Salesforce offers two main methods for importing data.***
  - **Data import wizard** 
    - accessible through the Setup menu.
    - import data in standard as well as some custom objects.
    - can import up to 50,000 records at a time.
    - accesssible through ui.

  - **Data loader**
    - client application.
    - import data either from files or a database connection.
    - can import up to five million records at a time.
    - accessible through ui as well as cli.

**📝 note:** 
  - the number of records you can import may depends on
    - your permissions.
    - the overall data storage limits for your organization.
    - type of objects you can import also depends on your org edition.

**💡 tip:** 
  - Data Loader uses the SOAP API to process records. For faster processing, you can configure it to use the Bulk API instead. 
    - The Bulk API is optimized to load a large number of records simultaneously. 
    - It is faster than the SOAP API due to parallel processing and fewer network round-trips.

***important: before import first test through small test file***


<br/>


## Export Data


