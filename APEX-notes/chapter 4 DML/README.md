# DML Statements

<details>
  <summary><b><em>insert</em></b>
</summary>
<p>

```apex
// Create the account sObject 
Account acct = new Account(Name='Acme', Phone='(415)555-1212', NumberOfEmployees=100);
// Insert the account by using DML
insert acct;  
``` 
</p>
</details> 

<details>
  <summary><b><em>update</em></b>
</summary>
<p>

```apex
// List to hold the new contacts to update
List<Contact> listToUpdate = new List<Contact>();
// Iterate through the list and add a title only
//   if the department is Finance
for(Contact con : conList) {
    if (con.Department == 'Finance') {
        con.Title = 'Financial analyst';
        // Add updated contact sObject to the list.
        listToUpdate.add(con);
    }
}
// Bulk update all contacts with one DML call
update listToUpdate;  
``` 
</p>
</details> 

<details>
  <summary><b><em>upsert</em></b>
</summary>
<p>

```apex
// Insert the Josh contact
Contact josh = new Contact(FirstName='Josh',LastName='Kaplan',Department='Finance');       
insert josh;
// Josh's record has been inserted
//   so the variable josh has now an ID
//   which will be used to match the records by upsert
josh.Description = 'Josh\'s record has been updated by the upsert operation.';
// Create the Kathy contact, but don't persist it in the database
Contact kathy = new Contact(FirstName='Kathy',LastName='Brown',Department='Technology');
// List to hold the new contacts to upsert
List<Contact> contacts = new List<Contact> { josh, kathy };
// Call upsert
upsert contacts;
// Result: Josh is updated and Kathy is created.  
``` 
</p>
</details> 

<details>
  <summary><b><em>delete</em></b>
</summary>
<p>

```apex
Contact[] contactsDel = [SELECT Id FROM Contact WHERE LastName='Smith']; 
delete contactsDel;  
``` 
</p>
</details>

<details>
  <summary><b><em>undelete</em></b>
</summary>
<p>

```apex
//Delete account records where Phone =’654321’. Also try undeleting records. [Anonymous Window]

public class point103 {
    public static void method(){
        List<account> accList = [select id,name from account where phone='654321'];
        
        delete accList;
    }
    public static void method2(){
        List<account> accList = [SELECT Id, Name FROM Account WHERE phone='654321' ALL ROWS]; 
        
        undelete accList;
    }
}

``` 
```apex
// undelete employees that were deleted	
List <employee__c> lst = [SELECT id,Account__c FROM Employee__c where IsDeleted=true ALL ROWS];
undelete lst;	
```	
	
</p>
</details>

<details>
  <summary><b><em>merge</em></b>
</summary>
<p>

```apex
// add example 
``` 
</p>
</details>
  
  
<br/>

- Each DML statement accepts either a single sObject or a list (or array) of sObjects.
- List must not contain duplicate sObjects.
- Operating on a list of sObjects is a more efficient way for processing records.

<br/>

## what are governer limits in DML?
- one by one you can insert only 200 records. In one execution of a program.
- using list you can insert only 1000 records. In one execution of a program.	
	
***Tip 💡 :*** 
- **_Never Use DML inside a loop_.**
- **_Never Use SOQL inside a loop_.**
	

	
<br/>	
	

### A program that explains it all...	
	
```apex
public class DML {
    Public Static void insertphone(){
        List<account> accList= new List<account>();
   		for( integer i=1; i<=5 ;i++){
            account acc=new account(Name='25/03 '+i,phone='123456');//25/03 
        	accList.add(acc);
      	}
    	insert accList;//bulk of dml
   
        // now working on contact object.
        list<contact> ConList=new List<contact>();
        for(integer j=0; j<5 ;j++){
            Contact con=new Contact(FirstName='25/03 ', LastName=''+j,AccountId=accList[j].Id);
            ConList.add(con);
        }
        insert ConList;
    }
    public Static void upsertMethod(){
        List<Account> acclist=new List<account>();
        
        Account acc=[SELECT id,phone from Account WHERE phone='123456' limit 1];
        acc.Phone='654321';
        
        acclist.add(acc);//update
        
        for(integer i=0; i<5; i++){
            Account acc2=new account(name='Test 25/03- 02 '+i,phone='12121212');//insert
            acclist.add(acc2);
        }
        upsert accList;
    }
    public static void del(){
         Account acc=[SELECT id, phone from account where phone='654321'];
         delete acc;
    }
    Public static void Undel(){
        Account acc=[SELECT id, phone from account where phone='654321' All Rows];
        undelete acc;
    }
    Public Static void Createopp(){
        List<Account> accList= new List<account>();
        List<Opportunity> oppList= new List<Opportunity>();
        AccList=[SELECT ID,Name from account where createddate=THIS_WEEK];
        for(account acc : acclist){
            Opportunity opp=new Opportunity(Accountid=acc.id ,name=acc.name , StageNAme='prospecting' ,closedate=system.today());
            oppList.add(opp);
		}
        insert opplist;
    }
    public static void last7days(){
        List<account> acclist=new List<account>();
        acclist=[select id ,name,phone from account where createddate=LAST_N_DAYS:7];
        For(account acc:acclist){
            acc.phone='1234567890';
           }
        update acclist;
    }
    Public static void descriptionopp(){
        list<opportunity> oppList=new List<opportunity>();
        opplist =[select id ,name,stageName from opportunity where (stagename='closed won' or stagename='closed lost') And createddate=Last_n_days:3];
        for(opportunity opp: opplist){
            if(opp.StageName=='closed won'){
                opp.Description='Opportunity is closed won';
            }
            else{
                opp.Description='Opportunity is closed Lost';
            }
            
        }
        update opplist;
    }
}
```
  

  
  
<br/>
  
<br/>

<br/>
  
<br/>
  
---
***references:***
	
1.**apex database:** https://trailhead.salesforce.com/content/learn/modules/apex_database/apex_database_dml  
	
2.**governer limits:** https://developer.salesforce.com/docs/atlas.en-us.234.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_apexgov.htm

---
  
