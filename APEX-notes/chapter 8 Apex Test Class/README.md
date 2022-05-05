## Notes
- In Test Class you don't work on Existing records, you have to create virtual records, even if you insert a record from test class it is inserted into virtual record base.
- You can save up to 6 MB of Apex code in each org. Test classes annotated with ``@isTest`` don’t count toward this limit.
- Even though test data rolls back, no separate database is used for testing. As a result, for some sObjects that have fields with unique constraints, inserting duplicate sObject records results in an error.
- Test methods don’t send emails.
- Test methods can’t make callouts to external services. You can use mock callouts in tests.
- SOSL searches performed in a test return empty results. To ensure predictable results, use ``Test.setFixedSearchResults()`` to define the records to be returned by the search.
- Even though it is not a best practice to do so, there are times when a test method needs access to pre-existing data. To access org data, annotate the test method with ``@isTest(SeeAllData=true)``. 









<br/>

<br/>

<br/>

<br/>

<br/>

<br/>

---

***1. apex_testing***  https://trailhead.salesforce.com/en/content/learn/modules/apex_testing




---
