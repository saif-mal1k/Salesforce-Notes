
## Scenerios  

<details>
<summary><b>Create a preferable Jira user story using Email.</b></summary>
<p>

---
  
***on jira***
  - settings > system > mail > incoming mail > add incoming mail server.
  
***only if using gmail***
  - 1. Create an App Password for Jira
  - 2. Go to your Google Account by clicking on your profile (in the top right corner) and clicking “Manage your Google account”.
  - Select Security.
  - Under "Signing in to Google", select App Passwords.
  - In 'Select App', choose Other
  - Enter 'Jira' as the name and press Generate
  - Copy the generated App password
  - Go to Jira System Settings
  - Navigate to Incoming Email.
  - Click ‘Edit’ for the mail server for which you wish to switch from Account Password to App Passwords. It should be listed as ‘Authentication Type - Basic'.
  - Ensure that the username of the Google account you are editing is the same account for which you generated the app password.
  - Replace the password that is currently entered with the 16-digit app password that you generated.
  - Click Save
  
***goto channel copy service mail address and send mail to create ticket*** 
  

---
  
</p>
</details>
  
  
<br/>


<details>
<summary><b>when a customer select something, generate a payment link through stripe and send it to customer via email. without feeding stripe with products and their prices .</b></summary>
<p>

---
  

---
  
</p>
</details>


<br/>


  
<details>
<summary><b>If all child cases are escalated then only parent cases can be escalated.</b></summary>
<p>

---
  

---
  
</p>
</details>
  
  
  <br/>
  
  
<details>
<summary><b>Create a lead record using google form.</b></summary>
<p>

---
  
### 1. enable Web to lead  
  
### 2. create form that saves to sheet

### 3. google app script code
```js

function googleFormToSalesforce() {

  var rows =  SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1n5J3bnD4LkFwA67Sv6zqAffrxf6ZSXYHgau39prtDi8/edit?resourcekey#gid=86274486").getDataRange().getValues()

  console.log(rows)
  // var row0 = [ [ 'Timestamp', 'Email address', 'First Name', 'Last Name', 'Email', 'City' ] ]
  var row1 = rows[1]
  console.log(row1)

  var FirstName = row1[2]
  var LastName = row1[3]
  var Email = row1[4]
  var City = row1[5]

  console.log(FirstName)
  console.log(LastName)
  console.log(Email)
  console.log(City)

// Make a POST request with form data.
var formData = {
  'oid': "00D5j000007LJWi",
  "retURL": "https://bruntwood-test.web.app/thankyou.html",
  "first_name" : FirstName,
  "last_name" : LastName,
  "email" : Email,
  "city" : City
};
// Because payload is a JavaScript object, it is interpreted as
// as form data. (No need to specify contentType; it automatically
// defaults to either 'application/x-www-form-urlencoded'
// or 'multipart/form-data')
var options = {
  'method' : 'post',
  'payload' : formData
};
// url for web to lead
UrlFetchApp.fetch('https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8', options);

//	Deletes the row that is just converted to lead. row 1 contains headers.
SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1n5J3bnD4LkFwA67Sv6zqAffrxf6ZSXYHgau39prtDi8/edit?resourcekey#gid=86274486").deleteRow(2) 

}
  
```
  
### 4. create a trigger in App script, that run above code when a form is submitted
  
---
  
</p>
</details>  
  

  
  

