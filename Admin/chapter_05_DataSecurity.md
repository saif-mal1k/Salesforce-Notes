# Data Security 
  - salesforce allows to rule what a user or group of users can access.
  - there are 4 levels of data security
    - **Org level** - Control Access to the Org
    - **Object level** - Control Access to Objects
    - **Field level** - Control Access to Fields
    - **Record level** - Control Access to Records
      - OWD
      - Role Hierarchy - give access for users higher in the hierarchy to all records owned by users below them in the hierarchy.
      - Sharing Rules
      - Manual sharing, through frontend

<br/>


## Organisation Level Security
  - maintain a list of authorized users
  - set password policies
  - Limit login to certain hours and locations
    - limit IP through which users can login
    - limit time during which user can login


<br/>


## Object Level Permissions
  - control access to standard and custom objects.
  - i.e control permissions to create, read, edit, delete any records on an object.
  - _controlled through_ 
    - **profiles** - to manage the objects that users can access and the permissions they have for each object. 
    - **permission sets & permission set groups** - to extend access and permissions without modifying users' profiles.


<br/>


## Field Level Permissions
  - control access to certain fields, even if user has object level access.
  - there are two permissions on field level
    - read - allows user to view only
    - edit - allows user to view and update and delete
    - if nothing is selected, field wont be visible to user.
  - controlled through 
    - **profiles** - to manage the objects that users can access and the permissions they have for each object. 
    - **permission sets** - provides additional permissions, on top of the permissions users get through their profiles.

<details>
<summary> <b>why field level permissions, when we can hide field using page layouts.</b> </summary>  
<p>

***Answer:*** field level permissions cotrols the visiblity of fields in any part of the app including related list, list views, reports & search results which can'not be secured through page layouts.  
</p>
</details>

<br/>


## Record Level Security
  - control access to records for users, even if user has object level access
  - ex: a user can view his own records, but not others
  - to manage record level access -
    - **Org wide defaults** - 
      - specify the default level of access users have to each others’ records.
    - **Role Hierarchies** - 
      - give access for users higher in the hierarchy to all records owned by users below them in the hierarchy.
      - Role hierarchies don’t have to match your organization chart exactly. 
      - Instead, each role in the hierarchy must represent a level of data access that a user or group of users needs.
    - **Sharing rules** - 
      - Sharing rules are exceptions to OWD for particular groups of users.
      - Sharing rules give access to users so they can get to records they don’t own or can’t normally see.
      - They can’t be stricter than your organization-wide default settings.
    - **Manual Sharing** - 
      - allows owners of particular records to share them with other users. 




<br/>


<br/>


<br/>


<br/>


### Summary

<table>
<tr>
<td width="170px">  

![image](https://user-images.githubusercontent.com/63545175/190900334-ca4b66e6-d517-4359-ae85-67360af154ae.png)

- profiles and permission sets  
</td>  
<td width="170px">

![image](https://user-images.githubusercontent.com/63545175/190900364-8eccabfe-4116-4fa4-acbc-6e7b477a01b6.png)

- profiles and permission sets 
  
</td>
<td width="340px">  

![image](https://user-images.githubusercontent.com/63545175/190900387-e7558e74-724d-4eb4-9953-9c1271102f1c.png)

</td>  
</tr>  
</table> 







<br/>


<br/>


<br/>


<br/>



---
***references***

1. https://trailhead.salesforce.com/content/learn/modules/data_security
 







