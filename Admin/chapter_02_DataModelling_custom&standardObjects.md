## types of objects
  - ***standard objects*** : _provided by salesforce._
      - Account - are the companies you’re doing business with.
      - Contacts - are the people who work at an Account.
      - Leads - are potential prospects.
      - Opportunities - are qualified leads that you’ve converted.
  - ***custom objects*** : _created by admin._

<br/>

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

<br/>

***there are ``24`` types of fields***

---

  - ``Auto Number``	A system-generated sequence number that uses a display format you define. The number is automatically incremented for each new record.
  - ``Formula``	A read-only field that derives its value from a formula expression you define. The formula field is updated when any of the source fields change.
  - ``Roll-Up Summary`` A read-only field that displays the sum, minimum, or maximum value of a field in a related list or the record count of all records listed in a related list. ***only available to master in a master-detail relationship.***

---

  - ``Lookup Relationship``	Creates a relationship that links this object to another object. The relationship field allows users to click on a lookup icon to select a value from a popup list. The other object is the source of the values in the list.
  - ``Master-Detail Relationship``	Creates a special type of parent-child relationship between this object (the child, or "detail") and another object (the parent, or "master") where:
    - The relationship field is required on all detail records.
    - The ownership and sharing of a detail record are determined by the master record.
    - When a user deletes the master record, all detail records are deleted.
    - You can create rollup summary fields on the master record to summarize the detail records.
    - The relationship field allows users to click on a lookup icon to select a value from a popup list. The master object is the source of the values in the list.
  - ``External Lookup Relationship``	Creates a relationship that links this object to an external object whose data is stored outside the Salesforce org.
 
---

  - ``Checkbox``	Allows users to select a True (checked) or False (unchecked) value.
  - ``Currency``	Allows users to enter a dollar or other currency amount and automatically formats the field as a currency amount. This can be useful if you export data to Excel or another spreadsheet.
  - ``Date``	Allows users to enter a date or pick a date from a popup calendar.
  - ``Date/Time``	Allows users to enter a date and time, or pick a date from a popup calendar. When users click a date in the pop-up, that date and the current time are entered into the Date/Time field.
  - ``Email``	Allows users to enter an email address, which is validated to ensure proper format. If this field is specified for a contact or lead, users can choose the address when clicking Send an Email. Note that custom email addresses cannot be used for mass emails.
  - ``Geolocation``	Allows users to define locations. Includes latitude and longitude components, and can be used to calculate distance.
  - ``Number``	Allows users to enter any number. Leading zeros are removed.
  - ``Percent``	Allows users to enter a percentage number, for example, '10' and automatically adds the percent sign to the number.
  - ``Phone``	Allows users to enter any phone number. Automatically formats it as a phone number.
  - ``Picklist``	Allows users to select a value from a list you define.
  - ``Picklist`` (Multi-Select)	Allows users to select multiple values from a list you define.
  - ``Text``	Allows users to enter any combination of letters and numbers.
  - ``Text Area``	Allows users to enter up to 255 characters on separate lines.
  - ``Text Area (Long)``	Allows users to enter up to 131,072 characters on separate lines.
  - ``Text Area (Rich)``	Allows users to enter formatted text, add images and links. Up to 131,072 characters on separate lines.
  - ``Text (Encrypted)`` 
Allows users to enter any combination of letters and numbers and store them in encrypted form.
  - ``Time``	Allows users to enter a local time. For example, "2:40 PM", "14:40", "14:40:00", and "14:40:50.600" are all valid times for this field.
  - ``URL``	Allows users to enter any valid website address. When users click on the field, the URL will open in a separate browser window.

--- 



