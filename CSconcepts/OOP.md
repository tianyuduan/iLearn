# Object Oriented Programming

Programming paradigm based on the concept of 'objects' that contain data, in form of  fields and code in the form of methods 

refer to variables as properties/fields
and functions as methods 

Objects can be though of as main building blocks that do all the work. Objects are everywhere in JavaScript, since evey component of javascript is an object, including Functions, Strings and Numbers. 

We can use Object literals and constructor functions to CREATE Object. 

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

Encapsulation refers to enclosing all the functionalities of an object within that object so that the object’s internal workings (its methods and properties) are hidden from the rest of the application. This allows us to abstract or localize specific set of functionalities on objects.


Inheritance refers to an object being able to inherit methods and properties from a parent object



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




