
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

<br/>

### What is a report type?
  - Salesforce provides a set of predefined standard report types. but, sometimes You might need to create a custom report type.

<table>
<tr>
<td> standard report types are available on frontend, on reports tab </td>
<td> if you want to create reports for custom objects, goto setup search report types create a custom report type </td>
</tr>
<tr>
<td>  
  
![image](https://user-images.githubusercontent.com/63545175/190896886-694c272f-5235-4440-a1b6-f61a94b64dc4.png)
</td>
<td>
  
![image](https://user-images.githubusercontent.com/63545175/190897709-3c0f57d0-38ab-4302-b4c8-c24f52c0f4fc.png)
</td>
</tr>
</table>

  - ``You can’t edit standard report types.``
  - The report type determines which fields and records are available for use when creating a report. 
 
***This is based on the relationships between a primary object and its related objects.***

<details>
<summary> <b>Primary object with related object—</b> </summary> 
<p> 

Records returned are only those where the primary object has at least one related object record. In our example of Opportunities with Products, the only records that would be displayed on the report would be opportunities that have at least one related product record.
</p>
</details>

<details>  
<summary> <b>Primary object with or without related object—</b> </summary> 
<p>  

Records returned are those where the primary object may or may not have a related object record. If we were to create a custom report type, Opportunities with or without Products, then opportunities would be displayed whether or not they have a related product record.
</p>
</details>

<br/>

<details>
<summary> <b> CREATING REPORT TYPE FOR CUSTOM OBJECT & SELECTING FIELDS FOR REPORTING </b> </summary>
<p>

<table>
<tr>  
<td>
  
![image](https://user-images.githubusercontent.com/63545175/191184012-a40591d3-2e4d-4bca-ae3b-effa15e07524.png)
</td>
</tr>  
<tr>  
<td>
  
![image](https://user-images.githubusercontent.com/63545175/191184089-e885c02e-e33b-41c3-a382-8620ef1de97e.png)
</td>
</tr>  
<tr>  
<td>
  
![image](https://user-images.githubusercontent.com/63545175/191184184-aee798c6-3e77-4530-8007-69c53a5d1919.png)
</td>
</tr>  
<tr>  
<td>
  
![image](https://user-images.githubusercontent.com/63545175/191184137-667ff0fc-46ac-4e4e-bd9e-47b45c16baf9.png)
</td>
</tr>  
</table>  
  
</p>  
</details>


<br/>


<br/>


### Report format
***there are 3 types of report format***
![image](https://user-images.githubusercontent.com/63545175/190897788-3686dd04-1629-491a-9e62-500d4c9a4825.png)



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



