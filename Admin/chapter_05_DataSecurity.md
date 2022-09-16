# Data Security 
  - salesforce allows to rule what a user or group of users can access.
  - there are 4 levels of data security


## Organisation Level Security
  - maintain a list of authorized users
  - set password policies
  - Limit login to certain hours and locations
    - limit IP through which users can login
    - limit time during which user can login




## Object Level Permissions
  - control access to standard and custom objects
  - control permissions to create, read, edit, delete any records on an object
  - controlled through profiles and permission sets




## Field Level Permissions
  - control access to certain fields, even if user has object level access
  - there are two permissions on field level
    - read - allows user to view only
    - edit - allows user to view and update and delete
    - if nothing is selected field wont be visible to user.
  - controlled through profile and permission sets





## Record Level Security - OWD
  - control access to records for users, even if user has object level access
  - ex: a user can view his own records, but not others
  - to manage record level access -
    - Org wide defaults
    - Role Hierarchies
    - Sharing rules
    - Manual Sharing




<br/>


<details>
  <summary>    </summary>
<p>
  
  
</p>
</details>





