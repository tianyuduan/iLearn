# Object Oriented Programming && JavaScript

**OOP** is a programming paradigm based on the concept of 'objects' that contain data, in form of  fields and code in the form of methods.
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

&nbsp; Built-in Constructors 
```
var x1 = new Object();    // A new Object object
var x2 = new String();    // A new String object
```

We can use Object literals and Constructor functions to CREATE Objects. 

&nbsp; Object Literal Method
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

&nbsp; Constructor Method (require new keyword to invoke it, as well as, setting the constructor property in the instance)
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

You can not add a new property to an existing object constructor without modifying the constructor itself. So how would you add a property to the constructor function without modifiying it?

In comes the **prototype**. The prototype is an object that is associated with every functions and objects by default in JavaScript.

All JavaScript objects inherit properties and methods from a prototype, thus, each Object has a private property that holds a link to another object called its Prototype. 

That Prototype also has its own prototype and so on, until it points to null as its prototype. Null has no prototype, so acts as the final link to the **prototype chain**. 

The JavaScript prototype property allows you to add new properties to object constructors, doing so allows for faster object creation and it will apply it not only to the class, but also any current object instances of that class. Doing so also makes use of less copy & pasta code, no need to repeat certain functions each time, instead, we use prototypes as a reference to that function when its needed. 


```
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

Person.prototype.language = "English";
const andrew = new Person('andrew, 'smith', '27', 'brown);
andrew.language // returns english 

```


Here is an image to show the connection: 
![alt image](https://i.stack.imgur.com/UfXRZ.png)


## Understanding prototype methods

```__proto__``` points back to X.prototype(prototype chain), usable only on the instantiation of an object. (object used in lookup chain)
.prototype lists all the prototypes assigned to the Object as well as the constructor function itself, in reference to where it came from. (objected use to build ```__proto___``` when used with new)

Thus,
```
andrew.__proto__ === Person.prototype // true

Person.prototype.constructor === Person // true
```

>A nice way to think of it is...
>prototype is used by constructor() functions. It should've really been called something like, "prototypeToInstall", since that's what it is.
>and __proto__ is that "installed prototype" on an object (that was created/installed upon the object from said constructor() function)


## OOP 

**Encapsulation** refers to enclosing all the functionalities of an object within that object so that the object’s internal workings (its methods and properties) are hidden from the rest of the application. This allows us to abstract or localize specific set of functionalities on objects.



**Why Encapsulation?** 
When you want to create object to store some data, only object of its kind, then object literals are a good idea. 
If you want to create objects with similar functionalities, you encapsulate the main functionalities in a Function and you use that Function’s constructor to create the objects. 

```
function Product(name, price) {  this.name = name;  this.price = price;}

const bread = new Product('bread', 1);bread.price = -10;
```

Notice the use of variable this vs getName & getPrice = 5. If you do the latter, you are given full access to the properties from outside. So everyone can modify it. 

**objects “encapsulate” their data and prevent other objects from accessing the data directly. The only way to access the data is indirect via the functions written into the objects.**


**Inheritance** refers to an object being able to inherit methods and properties from a parent object

>Inheritance lets you create a new class by extending an existing class with additional properties and functions. The new class “inherits” all of the >features of its parent, avoiding the creation of new code from scratch. Furthermore, any changes made to the parent class will automatically be >available to the child class. This makes updates much easier.

```
function Book(_name, _price, _author) {  
    Product.call(this, _name, _price);  
    const author = _author;    
    this.getAuthor = function() {    
        return author; 
         }
    }

const faust = new Book('faust', 12.5, 'Goethe');basket.addProduct(1, faust);
```

Basket expects an object of type Product. Since book inherits from Product through Book, it is also a Product.

**Subclasses can inherit properties and functions from superclasses while adding properties and functions of their own.**

## Abstraction 


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

In object-oriented programming, polymorphism refers to a programming language's ability to process objects differently depending on their data type or class. More specifically, it is the ability to redefine methods for derived classes.

Inherited Particle and confetti class, but the compiler knowing which 1 to render at compile time.

## Inheritance 
 It is the mechanism  by which one class is allow to inherit the features(fields and methods) of another class, but modified with its own custom properties. 

### Examples

Human being as a class - blueprint of any entity which defines the scope the core properties and functions

Properties: body parts
body functions: walk() sleep()

Object is an instance of a class which has physical existance 


## Abstraction 

Abstraction is a process whereby you hide implementation details from the developer and 
instead only provide the functionality

1. hide irreleveant details
2. generalize by identifying the common essence

History of abstraction is the history of adding levels of abstraction. 

Electro flux is an illusion of 1s and Os
Assembly was a language to cope with the unbearableness of 1s and Os
Memory, CPU usage
infinty levels of abstraction allows for what we do today, like video, streaming, etc

// hide details of API call, just need to post to facebook

function postToFaceook(msg) {
    const apiClient : KEY
    const: TEXT
    const status
    return status;
}

vs

const facebookAPIClient = XXX + Key
facebookAPIClient.postMessage(text);

you can abstract again, where we abstract postToFacebook into postToSocialMedia to handle twitter, linkedin, etc
