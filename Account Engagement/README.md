## Learning

Introduction
- Review Course Objectives
- Set Learner Expectations
- Review Housekeeping Items
- Review Additional Course Resources
- Explore Course Case Study

Salesforce Integration
- Understand the Account Engagement-Salesforce Relationship
- Sync Data Between Salesforce and Account Engagement
- Enable Account Engagement in Salesforce
- Create Custom Fields
- Review Salesforce Campaigns

Administration
- Create an Account Engagement Dashboard
- Authenticate Your Email Sending Domains
- Sync with Third-Party Applications Using Connectors
- Restore Assets from the Recycle Bin
- Create and Assign Users and User Groups
- Understand Usage Governance

Visitors and Prospects
- Understand Account Engagement Visitors
- Understand Account Engagement Prospects

List Management
- Create List Types
- Organize Prospects Using Static Lists
- Test Emails Using Test Lists

Personalization and Email Marketing
- Personalize Your Emails with HML and Advanced Dynamic Content
- Automate Email Marketing
- Create Email Templates
- See What Works Best for Your Audience Using AB Testing
- Track Email Performance Using Email Reports

Forms and Landing Pages
- Capture Leads with Forms
- Convert Visitors to Leads Using Landing Pages
- Track Leads with Forms and Landing Page Reports
- Track Clicks Using Custom Redirects
- Create Custom Redirect Reports

Lead Management
- Trigger Page Actions
- Automate Actions from a Marketing Element Using Completion Actions
- Create a List of Prospects and Apply a Segmentation Action Using Segmentation Rules
- Create Repeatable, Criteria-Based Automation Rules
- Create Dynamic Lists
- Choose an Automation Tool

Lead Qualification
- Understand Prospect Scoring
- Grade Prospects Based on Profiles

Lead Nurturing
- Build an Engagement Program
- Create Engagement Program Reports


---


## Responsiblities (you should be able to):
- Enable Account Engagement
- Explain the relationship created between Account Engagement and Salesforce once Account Engagement has been enabled.
- Generate leads with Account Engagement’s various lead generation tools including Forms, Landing Pages, and Custom Redirects.
- Manage leads with Account Engagement’s lead management tools including Page Actions, Automation Rules, Segmentation Rules, Dynamic Lists, and Completion Actions.
- Engage leads with Account Engagement’s lead engagement tools including Email, Personalization, Dynamic Content, and Engagement Studio.
- Qualify leads with Account Engagement’s scoring and grading functionality.
- Interpret data generated via Account Engagement’s reporting capabilities.
- Design and execute successful end-to-end marketing workflows using Account Engagement.



---


## Implementation (Pardot Installation)

### Connect Salesforce and Pardot
- Confirm B2BMA Integration User has verified data connection
- If connection cannot be made reinstall b2bma_canvas package
- Provide field level access to B2bma Integration User profile
- Map relevant custom lead fields to Pardot
- Map relevant custom contact fields to Pardot
- Map relevant custom account fields to Pardot
- Map relevant custom opportunity fields to Pardot
- Create Salesforce to Pardot campaign in Salesforce
- Configure prospect syncing behavior
- Map Pardot lead fields to contacts

## Make Pardot Data and Actions Available on Salesforce Records
- Setup Salesforce custom domain
- Add Pardot fields and buttons to contact layouts
- Add Pardot fields and buttons to lead layouts
- Add visual force components to contact page layouts
- Add visual force components to lead page layouts
- Add engagement history to contact lighting pages
- Add engagement history to lead lightning pages

## Enable Connected Campaigns Functionality
- Create Website Tracking Salesforce campaign and map to Pardot
- Configure connected campaigns
- Hide unconnected campaigns
- Turn on Salesforce managed campaigns

## Sync Users Between Salesforce and Pardot
- Map Salesforce profiles to Pardot profiles
- Configure syncing behavior

## Enable Pardot Lightning App
- Add profiles to B2BMA Canvas app
- Add Pardot and Sales Cloud User or CRM User permission sets to designated users
- Hide classic Pardot app

## Domain and Website Setup
- Install javascript tracking code on website through a Pardot plugin, a design template, or tag manager
-  Add sending and tracking domains to Pardot settings
- Add TXT records to DNS settings
- Point tracker domain CNAME to go.pardot.com
- Validate DNS changes

## Initiate Prospect Sync
- Test prospect syncing behavior
- Unpause Salesforce connector sync
- Export relevant Salesforce leads and contacts
- Import leads and contacts into Pardot as prospects



---

## Resources:
- Salesforce Account Engagement(fka Pardot) Implementation Guide: https://resources.docs.salesforce.com/latest/latest/en-us/sfdc/pdf/pardot_implementation_guide.pdf

- TRAILMIX: https://trailhead.salesforce.com/users/strailhead/trailmixes/prepare-for-your-account-engagement-specialist-credential

- B2BMA Implementation: ⁠https://resources.docs.salesforce.com/latest/latest/en-us/sfdc/pdf/pardot_b2bma_implementation_guide.pdf

- USER SYNC: ⁠https://resources.docs.salesforce.com/latest/latest/en-us/sfdc/pdf/pardot_user_sync_implementation_guide.pdf

- Lightning App implementation: ⁠https://resources.docs.salesforce.com/latest/latest/en-us/sfdc/pdf/pardot_lightning_app_implementation_guide.pdf

- Lead Scoring and Grading: https://trailhead.salesforce.com/en/content/learn/modules/pardot-lead-scoring-and-grading-lightning

- Basics: https://trailhead.salesforce.com/en/content/learn/modules/pardot-basics-lightning

- Business Unit Setup: https://trailhead.salesforce.com/en/content/learn/modules/pardot-business-units

- Pardot Integration: https://trailhead.salesforce.com/en/content/learn/modules/pardot-salesforce-integration-for-lightning-app

- Pardot Sandbox: https://trailhead.salesforce.com/en/content/learn/modules/pardot-sandboxes-quick-look

- marketing Content Strategy: https://trailhead.salesforce.com/en/content/learn/trails/plan-marketing-content-and-strategy-with-marketing-cloud-account-engagement

- Lead Nurturing: https://trailhead.salesforce.com/en/content/learn/modules/pardot-lead-nurturing-lightning


- Pre-recorded video for forms and form handlers: https://salesforce.vidyard.com/watch/QtpoU5BtxRmt4BTfaJoD5J?

- Pre-recorded video for landing pages: https://salesforce.vidyard.com/watch/YWdkyFu9Hg75biMUoFSSvE?

- Presentation PDF deck for landing pages: https://org62.my.salesforce.com/sfc/p/#000000000062/a/3y000000xQSE/1E12HDLEBKo9pxomYBqN.W05WPXJF777qc032XxiAEQ

- Presentation PDF deck for forms and form handlers: https://org62.my.salesforce.com/sfc/p/#000000000062/a/3y000000xQRR/ndE4GrYE.Idl5ukOFIho7rxy_C8x5o9GPeWI8YE5LzM

- Generate Leads with Account Engagement Landing Pages and Forms: https://help.salesforce.com/s/articleView?id=sf.pardot_leadgen_parent.htm&type=5

- Capture Leads with Forms and Form Handlers: https://help.salesforce.com/s/articleView?id=sf.pardot_forms.htm&type=5

- Create a Form: https://help.salesforce.com/s/articleView?id=sf.pardot_create_form.htm&type=5

- Add a Form to Your Website: https://help.salesforce.com/s/articleView?id=sf.pardot_forms_deploying_forms.htm&type=5

- Customizing Forms: https://help.salesforce.com/s/articleView?id=sf.pardot_forms_customizing.htm&type=5

- Testing Forms: https://help.salesforce.com/s/articleView?id=sf.pardot_forms_testing.htm&type=5

- Form Handlers: https://help.salesforce.com/s/articleView?id=sf.pardot_form_handlers.htm&type=5

- Create a Form Handler: https://help.salesforce.com/s/articleView?id=sf.pardot_create_form_handler.htm&type=5

- Create an Enhanced Landing Page: https://help.salesforce.com/s/articleView?id=sf.pardot_lps_create.htm&type=5- 

- Enhanced Landing Page Experience: https://help.salesforce.com/s/articleView?id=sf.pardot_lps_parent.htm&type=5

- Email Sending Domain Setup: https://salesforce.vidyard.com/watch/kwQ2UjbXxB9j9NQrHXhvCJ

- Tracker domain setup: https://www.youtube.com/watch?v=1LEwd6KrB3c&list=PL2EczON8_UBgQGAidvZjo6cdqffp7q0kg&index=49

- Ensure Enable Connected Campaigns: https://salesforce.vidyard.com/watch/XHoqR8gHNPDhuV6mDwTxrG

- Enable Lightning Email templates: https://help.salesforce.com/s/articleView?id=000393621&type=1

- Add Pardot fields and information on leads and Contact pages: https://www.youtube.com/watch?v=F2czxIP-OEc

- Enable Engagement History Dashboards: https://help.salesforce.com/s/articleView?id=sf.pardot_engagement_history_dashboard_enable.htm&type=5

- Add Pardot-related information to the Salesforce Campaigns page layout: https://www.linkedin.com/pulse/how-set-up-pardot-engagement-history-salesforce-louis-chinnam/




