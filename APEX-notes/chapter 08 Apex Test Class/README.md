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
- Meeting the code coverage requirements for deploying Apex to production or distributing Apex to customers via packages.


<br/>


> ***💡 tip:*** Salesforce runs all Apex tests on your behalf through a process called Apex Hammer. The Hammer process runs in the current version and next release and compares the test results. This process ensures that the behavior in your custom code hasn’t been altered as a result of service upgrades. The Hammer process picks orgs selectively and doesn’t run in all orgs.


<br/>


> ***💡 tip:*** Before you can deploy your code or package it for the Lightning Platform AppExchange, at least 75% of Apex code must be covered by tests, and all those tests must pass. In addition, each trigger must have some coverage. 


<br/>


### Test method Syntax
```apex
  @isTest static void testName() {
      // code_block
  }
```

***Test methods are written in Test classes as:-***
```apex
  @isTest
  private class MyTestClass {
      @isTest static void testName() {
          // code_block
      }
  }
```

**Note:** Test classes can be either private or public. If you’re using a test class for unit testing only, declare it as private. Public test classes are typically used for test data factory classes,



<br/>


<br/>


## Setting up test data
<em> "Test data is set up inside the test method, which can be time-consuming as you add more test methods. If you have many test methods, put test-data creation in a test utility class and call the utility class from multiple test methods" </em>

### Test.startTest() and Test.stopTest()
- The test method contains the ``Test.startTest()`` and ``Test.stopTest()`` method pair, which delimits a block of code that gets a fresh set of governor limits.  
- To test that Apex code runs within governor limits, isolate data setup’s limit usage from your test’s. 
- To isolate the data setup process’s limit usage, enclose the test call within the Test.startTest() and Test.stopTest() block. 
- Also use this test block when testing asynchronous Apex. 



<br/>


## @testSetup
https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_testsetup_using.htm








 

<br/>


<br/>


<br/>


<br/>


<br/>


<br/>


---

***1. apex_testing***  https://trailhead.salesforce.com/en/content/learn/modules/apex_testing




---
