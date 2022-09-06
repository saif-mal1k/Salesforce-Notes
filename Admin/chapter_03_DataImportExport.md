
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
  - effect of field type on import
    - Multi-Select Picklists—To import multiple values into a multi-select picklist, separate the values by a semicolon in your import file.
    - Checkboxes—To import data into a checkbox field, use 1 for checked values and 0 for unchecked values.
    - Default Values—For picklist, multi-select picklist, and checkbox fields, if you do not map the field in the import wizard, the default value for the field, if any, is automatically inserted into the new or updated record.
    - Date/Time Fields—Ensure that the format of any date/time fields you are importing matches how they display in Salesforce per your locale setting.
    - Formula Fields—Formula fields cannot accept imported data because they are read-only.
  - Field Validation Rules
    - Salesforce runs validation rules on records before they are imported. 
    - Records that fail validation aren’t imported. 
    - Consider deactivating the appropriate validation rules before running an import if they affect the records you are importing.

***Data import wizard***
  - Trigger workflow rules and processes for new and updated records
    - while chosing data **Data Import wizard** asks ``Trigger workflow rules and processes ?`` choose respective option.
  - csv file has a limit of 700 columns in 1 row.
 
 <details>
  <summary> Common Errors:</summary>
<p>

![image](https://user-images.githubusercontent.com/63545175/188550406-e80796ce-d2e9-462a-ab60-c541a2992a86.png)

```
  number of characters in 1 row must not exceed 700
```
  
![image](https://user-images.githubusercontent.com/63545175/188550285-ef748bb1-95d8-4918-9fc3-1c11b570e9d1.png)

</p>
</details>

***Data loader***

<br/>

**💡 tip:** 
  - Data Loader uses the SOAP API to process records. For faster processing, you can configure it to use the Bulk API instead. 
    - The Bulk API is optimized to load a large number of records simultaneously. 
    - It is faster than the SOAP API due to parallel processing and fewer network round-trips.

***important: before import first test through small test file***


<br/>


## Export Data ???




<br/>

<br/>

<br/>

<br/>


---
***references***

1. https://trailhead.salesforce.com/content/learn/modules/lex_implementation_data_management/lex_implementation_data_import?trail_id=force_com_admin_beginner
2. https://trailhead.salesforce.com/content/learn/modules/lex_implementation_data_management/lex_implementation_data_export?trail_id=force_com_admin_beginner ???
3. https://trailhead.salesforce.com/content/learn/projects/import-and-export-with-data-management-tools ???

