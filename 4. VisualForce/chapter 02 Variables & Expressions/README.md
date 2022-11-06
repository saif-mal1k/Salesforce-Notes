## Global Variables and Visualforce Expressions
Visualforce pages can display data retrieved from the database or web services, 
  - this data is accessed in markup through the use of global variables, and properties made available by the page’s controller.
  - expressions are used for passing values into components by assigning them to attributes.

<br/>


### Global Variables
- Visualforce provides information about the logged-in user in a global variable called $User. 
- You can access fields of the $User global variable (and any others) using an expression as: {! $User.FirstName }.

***There are nearly two dozen global variables that can be used within Visualforce.***
  - for getting information about the currently logged in user ``( $User)``,
  - for getting details about the organization ``( $Organization)``, 
  - settings ``( $Setup)``, 
  - details about custom objects ``( $ObjectType)``, 
  - actions available on those objects ``( $Action)``, 
  - and so on. 


<br/>


### Visualforce Expressions
- A Visualforce expression is any set of literal values, variables, sub-expressions, or operators that can be resolved to a single value. 
- Expressions have many uses, and are often used to provide values for attributes on Visualforce components.

***syntax***
```
{! expression }
```

- The resulting value can be 
  - a **primitive** (integer, string, and so on), 
  - a **Boolean**, 
  - an **sObject**, 
  - a **controller method** such as an action method, and soon.
- Method calls aren’t allowed in expressions.

> **Note:** Visualforce expressions are case-insensitive, and spaces within the ``{! ... }`` are ignored. So these expressions all produce the same value:

<table>
<tr>
<td>
  
{! $User.FirstName}
</td>
<td>
  
{!$USER.FIRSTNAME}
</td>
<td>

{! $user.firstname }
</td>
</tr>
</table>  

<br/>

### working with expresions

Anything inside the {! } delimiters is evaluated and dynamically replaced when the page is rendered or when the value is used. 
Its value is calculated and substituted at run time, when someone views the page.

<table>
<tr>
<td colspan="2">

***involving String***

</td> 
</tr>    
<tr>
<td>

```html
<apex:page showHeader="false">
    
{! $User.FirstName & ' ' & $User.LastName }
    
</apex:page>  
```  
</td>
<td>

<img src="https://user-images.githubusercontent.com/63545175/199966368-b71e7137-d628-4822-99e1-d907b13e255b.png" width="340px">
</td>  
</tr>  
<tr>
<td>

```html
<apex:page showHeader="false">
    
{! CONTAINS('salesforce.com', 'force.com') }
    
</apex:page>  
```  
</td>
<td>

<img src="https://user-images.githubusercontent.com/63545175/199966687-2f211c71-a020-4372-8328-35a93b69b4b6.png" width="340px"> 
</td>  
</tr>    
<tr>
<td colspan="2">

***involving Date***

</td> 
</tr>
<tr>
<td>

```html
<apex:page showHeader="false">    
    {! TODAY() }
    <br/>        
    {! TODAY() + 7 }
    <br/>        
    {! DAY(TODAY() + 7) }
    <br/>        
    {! MONTH(TODAY() + 7) }  
    <br/>        
    {! YEAR(TODAY()) }
</apex:page>  
```  
  
  
</td>
<td>

<img src="https://user-images.githubusercontent.com/63545175/199966011-984515dc-7c7f-4d3d-90b1-94faef959c14.png" width="340px">
  
</td>  
</tr>
<tr>
<td colspan="2">

***involving Math***

</td> 
</tr>
<tr>
<td>

```html
<apex:page showHeader="false">
    
<p> {! MAX(1,2,3,4,5,6) } </p>
<p> {! SQRT(49) }</p>
    
</apex:page>  
```  
  
  
</td>
<td>

<img src="https://user-images.githubusercontent.com/63545175/199967258-2d7d680a-7ef4-4c70-9de4-37929a92326d.png" width="340px">  
</td>  
</tr>
<tr>
<td colspan="2">

***Conditional***

</td> 
</tr>
<tr>
<td>

```html
<apex:page showHeader="false">
    
<p>{! IF( DAY(TODAY()) < 15,
     'Before the 15th', 'The 15th or after') }</p>
    
</apex:page>
```  
  
  
</td>
<td>

<img src="https://user-images.githubusercontent.com/63545175/199968254-b2681fe5-0455-462f-abc7-0cf2f48729e6.png" width="340px">

</td>  
</tr>  
</table>  
  
  
<br/>


### Functions ????
https://developer.salesforce.com/docs/atlas.en-us.224.0.pages.meta/pages/pages_variables_functions.htm?_ga=2.117043215.865651692.1667559514-1022251765.1662354198


### Expressions ????
https://developer.salesforce.com/docs/atlas.en-us.224.0.pages.meta/pages/pages_variables_operators.htm?_ga=2.15635647.865651692.1667559514-1022251765.1662354198


### Global Variables ????
https://developer.salesforce.com/docs/atlas.en-us.224.0.pages.meta/pages/pages_variables_global.htm?_ga=2.15635647.865651692.1667559514-1022251765.1662354198

