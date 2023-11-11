## Scratch Orgs
- Scratch orgs are empty orgs (no metadata or data) that are easy to create and dispose of as needed.
- You can configure scratch orgs to be different Salesforce editions with different features and preferences.
- What’s more, you can re-use and share the scratch org definition file with other team members, because it’s part of the project integrated into the VCS.
- This way, it’s much simpler for you all to work in the same org configuration while each having your own development environment.

> When you use scratch orgs for development, you first push the source from your project in the VCS to sync the scratch org with the same metadata.
> If you are planning to use Setup for development, the changes you make are tracked automatically.
> You can pull down the modifications you made to include them in your project and use your VCS to commit all the changes.

- They’re automatically destroyed every seven days.
- Scratch orgs are empty without any data or metadata.
  - You can develop new features and know that nothing else will interfere with your code. 
  - If something’s not working, it is most definitely your code, and not someone else’s customization.




<details>
<summary><h3>Working with Scratch org in VSCode</h3></summary>
<p>

---

### [VS code Setup for Salesforce](https://github.com/saif-mal1k/Salesforce-Notes/tree/main/6.%20LWC#setup-for-lwc-)

### update salesforce CLI
```
update sfdx
```

### Authenticate your org
```
sfdx auth:web:login -d -a DevHub
```

### Create Scratch Org
```
sfdx force:org:create -s -f config/project-scratch-def.json -a dreamhouse-org
```

### Open scratch Org
```
sfdx force:org:open
```

---

</p>
</details>












<br/>

<br/>

<br/>

<br/>

---

## References

1. [Application Lifecycle and Development Models | Use Package Development for More Flexible Releases](https://trailhead.salesforce.com/content/learn/modules/application-lifecycle-and-development-models/use-package-development-for-more-flexible-releases?trailmix_creator_id=strailhead&trailmix_slug=architect-dev-lifecycle-and-deployment)

