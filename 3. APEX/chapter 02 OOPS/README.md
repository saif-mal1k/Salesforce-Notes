
## syntax
```apex

(none)|private|protected|public|global
[virtual | abstract | with sharing | without sharing]
class ClassName [implements InterfaceNameList] [extends ClassName]
{
    // The body of the class
}


```

---

<br/>


- **private**: 
    - This access modifier is the default.
    - the method or variable is accessible only within the Apex class in which it’s defined. 
    - If you don’t specify an access modifier, the method or variable is private.

- **protected**: 
    - This means that the method or variable is visible to any inner classes in the defining Apex class, and to the classes that extend the defining Apex class. 
    - You can only use this access modifier for instance methods and member variables. 

- **public**:
    - method or variable can be used by any Apex code in this application or namespace.

- **global**:
    - method or variable can be used by any Apex code that has access to the class, not just the Apex code in the same application.
    - This access modifier should be used for any method that needs to be referenced outside of the application, either in the SOAP API or by other Apex code.
    - If you declare a method or variable as global, you must also declare the class that contains it as global. 

> _There is no difference between Public and Global if they are meant to be used in same org_.

> _Global is useful when we create a package and include those classes in package and when we deploy that package into someone else's org then they will be able to use the variable and method only if they are using ``Global``_.

---

<br/>


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

<br/>


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






