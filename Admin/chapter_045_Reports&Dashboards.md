
# reports and dashboards ???

## reports
-  a report is a list of records (like opportunities or accounts) that meet a defined criteria.

<details>
<summary>  <b><em> example: </em></b>  </summary>  
<p>

---  
  
When Sita asked Maria which products are top sellers, Maria created a report that returned a list of all opportunities with products. Then, she:
  - Filtered to show only Closed Won opportunities for “active” products from this financial year.
  - Grouped by product family.
  - Summed the total number sold.
  - Displayed the results in a vertical bar chart, so Sita could easily see the results.

---  
  
</p>
</details>


## What is a report type?
  - Salesforce provides a set of predefined standard report types. but, sometimes You might need to create a custom report type.
  - ``You can’t edit standard report types.``
  - The report type determines which fields and records are available for use when creating a report. 
 
***This is based on the relationships between a primary object and its related objects.***

<details>
<summary> Primary object with related object— </summary> 
<p> 

Records returned are only those where the primary object has at least one related object record. In our example of Opportunities with Products, the only records that would be displayed on the report would be opportunities that have at least one related product record.
</p>
</details>

<details>  
<summary> Primary object with or without related object— </summary> 
<p>  

Records returned are those where the primary object may or may not have a related object record. If we were to create a custom report type, Opportunities with or without Products, then opportunities would be displayed whether or not they have a related product record.
</p>
</details>

<br/>


## dashboards
  - A dashboard is a visual display of key metrics and trends for records in your org. 
  - Each dashboard component is based on a single source report. 
  - You can use the same or different source reports for the various components in a dashboard (for example, use the same report in a bar chart and pie chart).
  - Like reports, dashboards are stored in folders. If you have access to a folder, you can view its dashboards. 
  - To view the individual dashboard components, you also need access to the underlying reports.




<br/>


<br/>


<br/>


<br/>


---
***references:***


https://trailhead.salesforce.com/content/learn/modules/lex_implementation_reports_dashboards?trail_id=force_com_admin_beginner



