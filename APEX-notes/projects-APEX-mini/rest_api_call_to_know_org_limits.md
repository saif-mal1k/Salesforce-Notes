### example request
```curl

  curl https://instance.salesforce.com/services/data/v48.0/limits/ -H "Authorization: Bearer token "X-PrettyPrint:1"

```


<Details>
<summary> <b> example response: </b> </summary>  
<p>
  
---
  
```
{
  "ConcurrentAsyncGetReportInstances" : {
    "Max" : 200,
    "Remaining" : 200
  },
  "ConcurrentSyncReportRuns" : {
    "Max" : 20,
    "Remaining" : 20
  },
  "DailyApiRequests" : {
    "Max" : 100000,
    "Remaining" : 14998
  },
  "DailyAsyncApexExecutions" : {
    "Max" : 250000,
    "Remaining" : 250000
  },
  "DailyBulkApiRequests" : {
    "Max" : 5000,
    "Remaining" : 5000
  },
  "DailyBulkV2QueryFileStorageMB": {
    "Max": 976562,
    "Remaining": 976562
  },
  "DailyBulkV2QueryJobs": {
    "Max": 10000,
    "Remaining": 10000
  },
  "DailyDurableGenericStreamingApiEvents" : {
    "Max" : 10000,
    "Remaining" : 10000
  },
  "DailyDurableStreamingApiEvents" : {
    "Max" : 10000,
    "Remaining" : 10000
  },
  "DailyGenericStreamingApiEvents" : {
    "Max" : 10000,
    "Remaining" : 10000
  },
  "DailyStandardVolumePlatformEvents" : {
    "Max" : 10000,
    "Remaining" : 10000
  },
  "DailyStreamingApiEvents" : {
    "Max" : 10000,
    "Remaining" : 10000
  },
  "DailyWorkflowEmails" : {
    "Max" : 390,
    "Remaining" : 390
  },
  "DataStorageMB" : {
    "Max" : 5,
    "Remaining" : 5
  },
  "DurableStreamingApiConcurrentClients" : {
    "Max" : 20,
    "Remaining" : 20
  },
  "FileStorageMB" : {
    "Max" : 20,
    "Remaining" : 20
  },
  "HourlyAsyncReportRuns" : {
    "Max" : 1200,
    "Remaining" : 1200
  },
  "HourlyDashboardRefreshes" : {
    "Max" : 200,
    "Remaining" : 200
  },
  "HourlyDashboardResults" : {
    "Max" : 5000,
    "Remaining" : 5000
  },
  "HourlyDashboardStatuses" : {
    "Max" : 999999999,
    "Remaining" : 999999999
  },
  "HourlyLongTermIdMapping" : {
    "Max" : 100000,
    "Remaining" : 100000
  },
  "HourlyODataCallout" : {
    "Remaining" : 9999,
    "Max" : 10000
  },
  "HourlyPublishedPlatformEvents" : {
    "Max" : 50000,
    "Remaining" : 50000
  },
  "HourlyPublishedStandardVolumePlatformEvents" : {
    "Max" : 1000,
    "Remaining" : 1000
  },
  "HourlyShortTermIdMapping" : {
    "Max" : 100000,
    "Remaining" : 100000
  },
  "HourlySyncReportRuns" : {
    "Max" : 500,
    "Remaining" : 500
  },
  "HourlyTimeBasedWorkflow" : {
    "Max" : 50,
    "Remaining" : 50
  },
  "MassEmail" : {
    "Max" : 10,
    "Remaining" : 10
  },
  "MonthlyPlatformEventsUsageEntitlement" : {
    "Max" : 300000,
    "Remaining" : 300000
  },
  "SingleEmail" : {
    "Max" : 15,
    "Remaining" : 15
  }}
 
```
  
---
  
</p>
</details>


<br/>


<br/>


<br/>


<br/>


---
***references***
- https://developer.salesforce.com/docs/atlas.en-us.224.0.api_rest.meta/api_rest/dome_limits.htm


