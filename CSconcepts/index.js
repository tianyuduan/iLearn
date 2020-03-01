// create an object
// {} object literal syntax good if only 1 method
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 8
    },
    draw: function () {
        console.log('draw');
    }
};


// with more behavior/methods, good to use factories 
//factory functionx`
function createCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    }
}

const circle2 = createCircle(1);

// constructor function 
function Circle(radius) {
    //reference to object executing this code
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}
// new => creates new object, points this to function, returns this automatically
const another = new Circle(1);
const string = new String();
//ƒ String() { [native code] } created the object 

// javscript assigns a default constructor to objects when not specfically declared
// every object has a constructor property and it references the function that was 
// used to create the object


// Constructor function
function Person(height, occupation, name) {
    this.height = height;
    this.occupation = occupation;
    this.name = name;
    this.myName = function() {
        console.log('my name is ' + this.name);
    }
    this.myHeight = function () {
        console.log('my height is ' + this.height);
    }
    this.myOccupation = function () {
        console.log('my occupation is ' + this.occupation);
    }
}

const andrew = new Person(168, 'doctor', 'andrew');
const shirley = new Person(153, 'data scientist', 'shirley');
Person.prototype.language = 'english';
Person.prototype.myLanguage = function() {
    console.log('my language is ' + this.language);
}

// new property is now shared among all instances of Person. 
// Person.prototype will have all the objects assigned with .prototype + constructor function 

//Encapsulation -  using a constructor function to encapsulate/enclose all the functionalities of a person., then using that constructor to create 
//objects

var a;
var b;
var c;
function alert() {
    console.log('hi');
    
}
