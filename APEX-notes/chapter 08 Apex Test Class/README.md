## important Notes
- In Test Class you don't work on Existing records, you have to create virtual records, even if you insert a record from test class it is inserted into virtual record base.
- You can save up to 6 MB of Apex code in each org. Test classes annotated with ``@isTest`` don’t count toward this limit.
- Even though test data rolls back, no separate database is used for testing. As a result, for some sObjects that have fields with unique constraints, inserting duplicate sObject records results in an error.
- Test methods don’t send emails.
- Test methods can’t make callouts to external services. You can use mock callouts in tests.
- SOSL searches performed in a test return empty results. To ensure predictable results, use ``Test.setFixedSearchResults()`` to define the records to be returned by the search.
- Even though it is not a best practice to do so, there are times when a test method needs access to pre-existing data. To access org data, annotate the test method with ``@isTest(SeeAllData=true)``. 


<br/>


<br/>


## importance of Apex Units tests
- Ensuring that your Apex classes and triggers work as expected.
- Having a suite of regression tests that can be rerun every time classes and triggers are updated to ensure that future updates you make to your app don’t break existing functionality.
- 💡 all tests must pass with at least 75% code coverage, for deploying Apex to production or distributing Apex to customers via packages on AppExchange. also, each trigger must have some coverage. 


<br/>


> ***💡 tip:*** Salesforce runs all Apex tests on your behalf through a process called Apex Hammer. The Hammer process compares the test results in current version and new release. This process ensures that the behavior in your custom code hasn’t been altered as a result of service upgrades. The Hammer process picks orgs selectively and doesn’t run in all orgs.


<br/>


<br/>


## Example of a test class
```apex
  @isTest
  private class MyTestClass {
  
      //test method syntax
      @isTest static void testName() {
          // code_block
          System.assertEquals(expectedValue, actualValue, 'msg if assert Fails');
      }
      
  }
```

> - The verifications are done by calling the ``System.assertEquals()`` method, which takes two parameters: the first is the ``expected value``, and the second is the ``actual value``. third parameter is ``optional string`` i.e logged if the assertion fails.
> - Test classes can be either ``private`` or ``public``. If you’re using a test class for unit testing only, declare it as private. Public test classes are typically used for test data factory classes, 



<br/>


<br/>


# Setting up test data
<em> "Test data is set up inside the test method, which can be time-consuming as you add more test methods. If you have many test methods, put test-data creation in a test utility class and call the utility class from multiple test methods" </em>

### Test.startTest() and Test.stopTest()
- The test method contains the ``Test.startTest()`` and ``Test.stopTest()`` method pair, which delimits a block of code that gets a fresh set of governor limits.  
- To test that Apex code runs within governor limits, isolate data setup’s limit usage from your test’s. 
- To isolate the data setup process’s limit usage, enclose the test call within the Test.startTest() and Test.stopTest() block. 
- Also use this test block when testing asynchronous Apex. 



<br/>


## using @testSetup
- You can have only one test setup method per test class.
- If an error occurs(_i.e caused by DML operation or an assertion failure_) in test setup method, the entire test class fails, and no further tests in the class are executed.
- test setup methods aren’t supported in classes that are using @isTest(SeeAllData=true) annotation.

<details>
<summary>example</summary>
<p>

---

#### Example of @testSetup
  
```apex
@isTest
private class CommonTestSetup {

    @testSetup static void setup() {
        // Create common test accounts
        List<Account> testAccts = new List<Account>();
        for(Integer i=0;i<2;i++) {
            testAccts.add(new Account(Name = 'TestAcct'+i));
        }
        insert testAccts;        
    }
    
    @isTest static void testMethod1() {
        // Get the first test account by using a SOQL query
        Account acct = [SELECT Id FROM Account WHERE Name='TestAcct0' LIMIT 1];
        // Modify first account
        acct.Phone = '555-1212';
        // This update is local to this test method only.
        update acct;
        
        // Delete second account
        Account acct2 = [SELECT Id FROM Account WHERE Name='TestAcct1' LIMIT 1];
        // This deletion is local to this test method only.
        delete acct2;
        
        // Perform some testing
    }

    @isTest static void testMethod2() {
        // The changes made by testMethod1() are rolled back and 
        // are not visible to this test method.        
        // Get the first account by using a SOQL query
        Account acct = [SELECT Phone FROM Account WHERE Name='TestAcct0' LIMIT 1];
        // Verify that test account created by test setup method is unaltered.
        System.assertEquals(null, acct.Phone);
        
        // Get the second account by using a SOQL query
        Account acct2 = [SELECT Id FROM Account WHERE Name='TestAcct1' LIMIT 1];
        // Verify test account created by test setup method is unaltered.
        System.assertNotEquals(null, acct2);
        
        // Perform some testing
    }

}
```

---
 
</p>
</details>



<br/>


## using TestDataFactory

<details>
<summary>example</summary>
<p>

---

### test Data factory
```apex

@isTest
public class TestDataFactory {
    public static void createTestRecords(Integer numAccts, Integer numContactsPerAcct) {
        List<Account> accts = new List<Account>();
        
        for(Integer i=0;i<numAccts;i++) {
            Account a = new Account(Name='TestAccount' + i);
            accts.add(a);
        }
        insert accts;
        
        List<Contact> cons = new List<Contact>();
        for (Integer j=0;j<numAccts;j++) {
            Account acct = accts[j];            
            // For each account just inserted, add contacts
            for (Integer k=numContactsPerAcct*j;k<numContactsPerAcct*(j+1);k++) {
                cons.add(new Contact(firstname='Test'+k,
                                     lastname='Test'+k,
                                     AccountId=acct.Id));
            }
        }
        // Insert all contacts for all accounts
        insert cons;
    }
}

```

### using factory from test class
```apex

@isTest
private class MyTestClass {
    @isTest static void testmethod test1() {
        TestDataFactory.createTestRecords(5,3);
        // Run some tests
    }
}

```

---
 
</p>
</details>


 

<br/>


<br/>


<br/>


<br/>


<br/>


<br/>


---
***references***

- ***1. apex_testing***  https://trailhead.salesforce.com/en/content/learn/modules/apex_testing
- ***2. test setup*** https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_testsetup_using.htm




---
