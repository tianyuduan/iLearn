# Object Oriented Programming && JavaScript

OOP is a programming paradigm based on the concept of 'objects' that contain data, in form of  fields and code in the form of methods.
(Variables as properties/fields and functions as methods)

**Objects** can be though of as main building blocks that do all the work. Objects are everywhere in JavaScript, since evey component of javascript is an object, including Functions, Strings and Numbers. 

A **Constructor** is a function that initializes an object. In JavaScript the constructors are more similar to normal java constructor, in times needing a 'blueprint' for creating many objects of the same 'type'.

 ```
 function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
```

Built-in Constructors 
```
var x1 = new Object();    // A new Object object
var x2 = new String();    // A new String object
```

We can use Object literals and Constructor functions to CREATE Objects. 

Object Literal Method
```
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    }
}

const circle2 = createCircle(1);
```

Constructor Method (require new keyword to invoke it)
```
function Circle(radius) {
    //reference to object executing this code
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
const another = new Circle(1);
```

You can not add a new property to an existing object constructor without modifying the constructor itself. All JavaScript objects inherit properties and methods from a prototype, thus, Each Object has a private property that holds a link to another object called its Prototype. 

That Prototype also has its own prototype and so on, until it points to null as its prototype. Null has no prototype, so acts as the final link to the **prototype chain**. 

The JavaScript prototype property allows you to add new properties to object constructors, doing so allows for faster object creation and it will apply it not only to the class, but also any current object instances of that class. Doing so also makes use of less copy & pasta code, no need to repeat certain functions each time, at instanitiation. 


Calling prototype allows you to see all the built-in properties. Constructor function will point back to Object() function. 

```
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;dd
}

Person.prototype.nationality = "English";
```
 
```__proto__``` points back to X.prototype(prototype chain), use on instantiation of the object. 


![alt image](https://i.stack.imgur.com/UfXRZ.png)

**Encapsulation** refers to enclosing all the functionalities of an object within that object so that the object’s internal workings (its methods and properties) are hidden from the rest of the application. This allows us to abstract or localize specific set of functionalities on objects.



**Why Encapsulation?** 
When you want to create object to store some data, only object of its kind, then object literals are a good idea. 
If you want to create objects with similar functionalities, you encapsulate the main functionalities in a Function and you use that Function’s constructor to create the objects. 


**Inheritance** refers to an object being able to inherit methods and properties from a parent object

*** Inheritance with the prototype chain





# Summary
## Encapsulation
It describes the bundling of data and methods operating on this data into one unit.

It is often used to implement an information-hiding mechanism. This mechanism reduces the accessibility of attributes to the current class and uses public getter and setter methods to control and restrict external access to these attributes. 

Object data can be stored neatly or encapsulated inside an object package

## Abstraction

Any objects in the real world, like your coffee machine, or classes in your current software project, that hide internal details provide an abstraction.

These abstractions make it a lot easier to handle complexity by splitting them into smaller parts. In the best case, you can use them without understanding how they provide the functionality. And that not only helps you to split the complexity of your next software project into manageable parts.

 abstraction — creating a simple model of a more complex thing, which represents its most important aspects in a way that is easy to work with for our program's purposes.

## Polymorphism 

It describes the concept that different classes can be used with the same interface. Each of these classes can provide its own implementation of the interface.

he ability of multiple object types to implement the same functionality is polymorphism

sharing some similiarties but having different implementation

## Inheritance 
 It is the mechanism  by which one class is allow to inherit the features(fields and methods) of another class.

### Examples

Human being as a class - blueprint of any entity which defines the scope the core properties and functions

Properties: body parts
body functions: walk() sleep()

Object is an instance of a class which has physical existance 




