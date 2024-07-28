
## Most Used API's Provided by Salesforce are-
- REST,
- SOAP,
- Connect,
- User Interface,
- Analytics,
- Bulk,
- Metadata, and
- Streaming.


## Which API to Use When 
<table class="featureTable sort_table">
    <thead class="thead sorted">
      <tr>
        <th scope="col">API Name</th>
        <th scope="col">Type</th>
        <th scope="col">Data Format</th>
        <th scope="col">Communication</th>
        <th scope="col">When to Use</th>
      </tr>
    </thead>
    <tbody class="tbody">
      <tr>
        <td>
          <p>REST API</p>
        </td>
        <td>
          <p>REST</p>
        </td>
        <td>
          <p>JSON, XML</p>
        </td>
        <td>
          <p>Synchronous</p>
        </td>
        <td>
          <p>REST API provides a powerful, convenient, and simple REST-based web services interface for interacting with Salesforce. Its advantages include ease of integration and development, and it’s an excellent choice of technology for use with mobile applications and web projects. For certain projects, you may want to use REST API with other Salesforce REST APIs. To build UI for creating, reading, updating, and deleting records, including building UI for list views, actions, and dependent picklists, use User Interface API. To work with B2B Commerce, CMS managed content, Experience Cloud sites, and Chatter, use Connect REST API. If you have many records to process, consider using Bulk API, which is based on REST principles and optimized for large sets of data.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>SOAP API</p>
        </td>
        <td>
          <p>SOAP (WSDL)</p>
        </td>
        <td>
          <p>XML</p>
        </td>
        <td>
          <p>Synchronous</p>
        </td>
        <td>
          <p>SOAP API provides a powerful, convenient, and simple SOAP-based web services interface for interacting with Salesforce. You can use SOAP API to create, retrieve, update, or delete records. You can also use SOAP API to perform searches and much more. Use SOAP API in any language that supports web services.</p>
        <p>For example, you can use SOAP API to integrate Salesforce with your org’s ERP and finance systems. You can also deliver real-time sales and support information to company portals and populate critical business systems with customer information.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Connect REST API</p>
        </td>
        <td>
          <p>REST</p>
        </td>
        <td>
          <p>JSON, XML</p>
        </td>
        <td>
          <p>Synchronous (photos are processed asynchronously)</p>
        </td>
        <td>
          <p>Connect REST API provides programmatic access to B2B Commerce, CMS managed content, Experience Cloud sites, files, notifications, topics, and more. Use Connect REST API to build UI for Chatter, such as feeds, users, and groups, especially in mobile applications.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>User Interface API</p>
        </td>
        <td>
          <p>REST</p>
        </td>
        <td>
          <p>JSON</p>
        </td>
        <td>
          <p>Synchronous</p>
        </td>
        <td>
          <p>Build Salesforce UI for native mobile apps and custom web apps using the same API that Salesforce uses to build for the web and Salesforce for Android, iOS, and mobile web. Build user interfaces that let users work with records, list views, actions, favorites, and more. Not only do you get data and metadata in a single response, but the response matches metadata changes made to the org by Salesforce admins. You don’t have to worry about layouts, picklists, field-level security, or sharing—all you have to do is build an app that users love.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Analytics REST API</p>
        </td>
        <td>
          <p>REST</p>
        </td>
        <td>
          <p>JSON, XML</p>
        </td>
        <td>
          <p>Synchronous</p>
        </td>
        <td>
          <p>You can access Analytics assets—such as datasets, lenses, and dashboards—programmatically using the Analytics REST API. Send queries directly to the Analytics Platform. Access datasets that have been imported into the Analytics Platform. Create and retrieve lenses. Access XMD information. Retrieve a list of dataset versions. Create and retrieve Analytics applications. Create, update, and retrieve Analytics dashboards. Retrieve a list of dependencies for an application. Determine what features are available to the user. Work with snapshots. Manipulate replicated datasets.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Bulk API</p>
        </td>
        <td>
          <p>REST</p>
        </td>
        <td>
          <p>CSV, JSON, XML</p>
        </td>
        <td>
          <p>Asynchronous</p>
        </td>
        <td>
          <p>Bulk API is based on REST principles and is optimized for loading or deleting large sets of data. You can use it to query, queryAll, insert, update, upsert, or delete many records asynchronously by submitting batches. Salesforce processes batches in the background.</p>
        <p>SOAP API, in contrast, is optimized for real-time client applications that update a few records at a time. You can use SOAP API for processing many records, but when the data sets contain hundreds of thousands of records, SOAP API is less practical. Bulk API is designed to make it simple to process data from a few thousand to millions of records.</p>
        <p>The easiest way to use Bulk API is to enable it for processing records in Data Loader using CSV files. Using Data Loader avoids the need to write your own client application.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Metadata API</p>
        </td>
        <td>
          <p>SOAP (WSDL)</p>
        </td>
        <td>
          <p>XML</p>
        </td>
        <td>
          <p>Asynchronous</p>
        </td>
        <td>
          <p>Use Metadata API to retrieve, deploy, create, update, or delete customizations for your org. The most common use is to migrate changes from a sandbox or testing org to your production environment. Metadata API is intended for managing customizations and for building tools that can manage the metadata model, not the data itself.</p>
        <p>The easiest way to access the functionality in Metadata API is to use the Salesforce Extensions for Visual Studio Code or the Ant Migration Tool. Both tools are built on top of Metadata API and use the standard tools to simplify working with Metadata API. </p>
        <p> The Salesforce Extensions for Visual Studio Code includes tools for developing on the Salesforce platform in the lightweight, extensible VS Code editor. These tools provide features for working with development orgs (scratch orgs, sandboxes, and DE orgs), Apex, Aura components, and Visualforce. The Ant Migration Tool is ideal if you use a script or the command line for moving metadata between a local directory and a Salesforce org.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Pub/Sub API</p>
        </td>
        <td>
          <p>gRPC and protocol buffers</p>
        </td>
        <td>
          <p>Binary</p>
        </td>
        <td>
          <p>Asynchronous (stream of data)</p>
        </td>
        <td>
        <p>You can use Pub/Sub API to integrate external systems with real-time events. Streams of data are based on custom payloads through platform events or changes in Salesforce records through Change Data Capture. Within Salesforce, you can publish and subscribe to events with Apex triggers, Process Builder, and Flow Builder. </p>
        <p>Pub/Sub API is built for high scale, bi-directional event integration with Salesforce. Use Pub/Sub API to efficiently publish and subscribe to binary event messages in the Apache Avro format. Pub/Sub API is based on gRPC and HTTP/2 and uses a pull-based model so you can control the subscription flow. With Pub/Sub API, you can use one of the 11 programming languages that gRPC supports. </p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Apex REST API</p>
        </td>
        <td>
          <p>REST</p>
        </td>
        <td>
          <p>JSON, XML, Custom</p>
        </td>
        <td>
          <p>Synchronous</p>
        </td>
        <td>
          <p>Use Apex REST API when you want to expose your Apex classes and methods so that external applications can access your code through REST architecture. Apex REST API supports both OAuth 2.0 and Session ID for authentication.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Apex SOAP API</p>
        </td>
        <td>
          <p>SOAP (WSDL)</p>
        </td>
        <td>
          <p>XML</p>
        </td>
        <td>
          <p>Synchronous</p>
        </td>
        <td>
          <p>Use Apex SOAP API when you want to expose Apex methods as SOAP web service APIs so that external applications can access your code through SOAP. Apex SOAP API supports both OAuth 2.0 and Session ID for authentication.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>Tooling API</p>
        </td>
        <td>
          <p>REST or SOAP (WSDL)</p>
        </td>
        <td>
          <p>JSON, XML, Custom</p>
        </td>
        <td>
          <p>Synchronous</p>
        </td>
        <td>
          <p>Use Tooling API to build custom development tools or apps for Platform applications. For example, you can use Tooling API to add features and functionality to your existing Platform tools and build dynamic modules into your enterprise integration tools. You can also use Tooling API to build specialized development tools for a specific application or service.</p>
          <p>Tooling API’s SOQL capabilities for many metadata types allow you to retrieve smaller pieces of metadata. Smaller retrieves improve performance, making Tooling API a good fit for developing interactive applications. Tooling API provides SOAP and REST interfaces.</p>
        </td>
      </tr>
      <tr>
        <td>
          <p>GraphQL API</p>
        </td>
        <td>
          <p>GraphQL</p>
        </td>
        <td>
          <p>JSON</p>
        </td>
        <td>
          <p>Synchronous</p>
        </td>
        <td>
          <p>Build highly responsive and scalable apps by returning only the data a client needs, all in a single request. GraphQL API overcomes the challenges posed by traditional REST APIs through field selection, resource aggregation, and schema introspection. Field selection reduces the size of the payload, sending back only fields that were included in the query. Aggregations reduce round trips between the client and server, returning a set of related resources within a single response. Schema introspection enables a user to see the types, fields, and objects that the user has access to.</p>
        </td>
      </tr>
    </tbody>
  </table>




## Cross-Origin Resource Sharing in Salesforce
Cross-Origin Resource Sharing (CORS) allows code running in a web browser to communicate with Salesforce from a specific origin. Let's add the URL patterns for Postman because we will be using it.

<br/>

## Salesforce Data APIs
Their purpose is to let you manipulate your Salesforce data or subscribe to data changes, whereas other APIs let you do things like customize page layouts or build custom development tools.
- REST API,
- SOAP API,
- Bulk API, and
- Pub/Sub API.


### REST API
REST API is a simple and powerful web service based on RESTful principles. It exposes all sorts of Salesforce functionality via REST resources and HTTP methods. For example, you can create, read, update, and delete (CRUD) records, search or query your data, retrieve object metadata, and access information about limits in your org. REST API supports both XML and JSON.

> Because REST API has a lightweight request and response framework and is easy to use, it’s great for writing mobile and web apps.

### SOAP API
SOAP API is a robust and powerful web service based on the industry-standard protocol of the same name. It uses a Web Services Description Language (WSDL) file to rigorously define the parameters for accessing data through the API. SOAP API supports XML only. Most of the SOAP API functionality is also available through REST API. It just depends on which standard better meets your needs.

> Because SOAP API uses the WSDL file as a formal contract between the API and consumer, it’s great for writing server-to-server integrations.

### Bulk API
Bulk API is a specialized RESTful API for loading and querying lots of data at once. By lots, we mean 50,000 records or more. Bulk API is asynchronous, meaning that you can submit a request and come back later for the results. This approach is the preferred one when dealing with large amounts of data. There are two versions of Bulk API (1.0 and 2.0).

> Bulk API is great for performing tasks that involve lots of records, such as loading data into your org for the first time.

### Pub/Sub API
Use Pub/Sub API  for integrating external systems with real-time events. You can subscribe to real-time events that trigger when changes are made to your data or subscribe to custom events. The APIs use a publish-subscribe, or pub/sub, model in which users can subscribe to channels that broadcast data changes or custom notifications.

> The pub/sub model reduces the number of API requests by eliminating the need for making frequent API requests to get data. Pub/Sub API is great for writing apps that would otherwise need to frequently poll for changes.




## API Limits
There are three types of API limits:
- **Timeout limits** - restrict the length of time a single call is allowed to run.
- **Concurrent limits** - cap the number of long-running calls that are running at one time. Concurrent limits vary by org type. Total limits cap the number of calls made within a rolling 24-hour period.
- **Total request allocation or Total limits** - Total limits cap the number of calls made within a rolling 24-hour period. otal limits vary by org edition and license type, including any add-on licenses you purchase. Total limits are also subject to minimums and maximums based on the org edition.

### ways to check your remaining API calls:
- The API Usage box on the System Overview page. (From Setup, enter System Overview in the Quick Find box, then select System Overview.)
- Information returned in the Sforce-Limit-Info response header for REST APIs.
- Information returned in the response body (in <type>API REQUESTS</type>) for SOAP APIs.
- The /limits call in the REST API.
- The API Request Limit per Month usage-based entitlement, which shows you your org’s API calls aggregated over 30 days.

> You can also set up notifications for when your org exceeds a number of API calls that you designate. To do so, from Setup, enter API Usage Notifications in the Quick Find box, then select API Usage Notifications
















<br/>

<br/>

<br/>

<br/>



---

references:
- [Quick Start: Connect Postman to Salesforce](https://trailhead.salesforce.com/content/learn/projects/quick-start-connect-postman-to-salesforce)
- [Platform API Basics](https://trailhead.salesforce.com/content/learn/modules/api_basics)

*   [Integration Patterns and Practices](https://developer.salesforce.com/docs/atlas.en-us.224.0.integration_patterns_and_practices.meta/integration_patterns_and_practices/integ_pat_intro_overview.htm?_ga=2.268005069.2107646473.1721820649-1867644730.1710443892)
    
*   [REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.224.0.api_rest.meta/api_rest/)
    
*   [SOAP API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.224.0.api.meta/api/)
    
*   [Bulk API 2.0 Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.api_asynch.meta/api_asynch/asynch_api_intro.htm)
    
*   [Pub/Sub API Documentation](https://developer.salesforce.com/docs/platform/pub-sub-api/overview)
    
*   [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_intro.htm)
    
*   [Tooling API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.api_tooling.meta/api_tooling/intro_api_tooling.htm)
    
*   [GraphQL API Developer Guide](https://developer.salesforce.com/docs/platform/graphql/guide)
    
*   [Developer Limits and Allocations Quick Reference](https://developer.salesforce.com/docs/atlas.en-us.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_overview.htm)
