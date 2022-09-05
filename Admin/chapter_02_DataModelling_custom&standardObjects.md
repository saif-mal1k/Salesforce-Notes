## types of objects
  - ***standard objects*** : _provided by salesforce._
      - Account - are the companies you’re doing business with.
      - Contacts - are the people who work at an Account.
      - Leads - are potential prospects.
      - Opportunities - are qualified leads that you’ve converted.
  - ***custom objects*** : _created by admin._

***Every standard and custom object has fields attached to it.***

<table class="featureTable sort_table">
          <thead align="left" class="thead sorted">
            <tr>
              <th id="d590424e294" scope="col">Field Type</th>
              <th id="d590424e297" scope="col">What is it?</th>
              <th id="d590424e300" scope="col">Can I get an example?</th>
            </tr>
          </thead>
          <tbody class="tbody">
            <tr>
              <td>Identity</td>
              <td>A 15-character, case-sensitive field that’s automatically generated for every record. You can find a record’s ID in its URL.</td>
              <td>An account ID looks like <span>0015000000Gv7qJ</span>.</td>
            </tr>
            <tr>
              <td>System</td>
              <td>Read-only fields that provide information about a record from the system, like when the record was created or when it was last changed.</td>
              <td>
<span>CreatedDate</span>, <span>LastModifiedById</span>, and <span>LastModifiedDate</span>.</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>All records need names so you can distinguish between them. You can use text names or auto-numbered names that automatically increment every time you create a record.</td>
              <td>A contact’s name can be Julie Bean. A support case’s name can be CA-1024.</td>
            </tr>
            <tr>
              <td>Custom</td>
              <td>Fields you create on standard or custom objects are called custom fields.</td>
              <td>You can create a custom field on the Contact object to store your contacts’ birthdays.</td>
            </tr>
          </tbody>
        </table>

