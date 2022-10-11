
## syntax
```apex

private | public | global
[virtual | abstract | with sharing | without sharing]
class ClassName [implements InterfaceNameList] [extends ClassName]
{
    // The body of the class
}


```

---

- **private**: 
    - default access specifier.
    - method or variable is accessible only within the Apex code it is used.

- **public**:
    - method or variable can be used by any Apex code in this application or namespace.

- **global**:
    - method or variable can be used by any Apex code that has access to the class, not just the Apex code in the same application.
    - This access modifier should be used for any method that needs to be referenced outside of the application, either in the SOAP API or by other Apex code.
    - If you declare a method or variable as global, you must also declare the class that contains it as global. 

---

- ``virtual``:
    - ....

- ``abstract``:
    - declares that the class contains abstract methods ( i.e methods that only have signatures, no body defined )

- ``with sharing``:
    - ensure sharing rules that apply to current user.

- ``without sharing``:
    - default value
    - ensure that rules of current user are not enforced.

---

- ***implements***:
    - for interfaces

- ***extends***: 
    - for inheritance

---


<br/>


## ``with sharing`` inside ``without sharing`` 
```apex
public without sharing class outer {
    //Outer class code 
    with sharing class inner {
        //Inner class code
    }
}
```

- In this way, both the inner and outer classes run with current users permissions.


## ``without sharing`` inside ``with sharing`` 
```apex
public with sharing class outer {
    //outer class code
    without sharing class inner {
        //Inner class code
    }
}
```
- In the above code outer class runs with current users sharing rules. But inner class runs with system context.






