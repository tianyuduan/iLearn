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


console.log('hi');
