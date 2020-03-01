# JavaScript

### Understanding JavaScript 

There are APIs in the browser that have been used by almost any JavaScript developer out there (e.g. “setTimeout”). Those APIs, however, are not provided by the Engine.

We have the Engine but there is actually a lot more. We have those things called Web APIs which are provided by browsers, like the DOM, AJAX, setTimeout and much more.
And then, we have the so popular event loop and the callback queue.

JavaScript is a single-threaded programming language, which means it has a single Call Stack. Therefore it can do one thing at a time.
The Call Stack is a data structure which records basically where in the program we are. If we step into a function, we put it on the top of the stack. If we return from a function, we pop off the top of the stack. 

Each entry in the Call Stack is called a Stack Frame.

What happens when you have function calls in the Call Stack that take a huge amount of time in order to be processed?

the solution is asynchronous callbacks


## What is a Javascript engine

software that converts javascript code into fast, optimized machine code then executed by CPU of machine. Each browser has different javascript engine, Chrome uses v8 engine, firefox uses spidermonkey, etc. 

employs a technique called "JIT / just in time" compilation (used in node as well)

 termed as a kind of virtual machine. A virtual machine refers to the software-driven emulation of the given computer system. Javascript is a process virtual machine is less full-functional and can run one program

 JavaScript Core performs a series of steps to interpret and optimize a script:
1. It performs a lexical analysis, breaking down the source into a series of tokens.
2. Four JIT processes then click on, analyzing and executing the bytecode produced by the parser.

## How V8 works

V8 is a multi-threaded program written in c++, 1 functionality -> convert code written to it into optimized machine code

The V8 design consists of two compilers that compile source code directly into machine code.
•  Full-codegen:  It is a fast compiler that produces unoptimized code
•  Crankshaft: a slower compiler that produces fast and optimized code

There are many threads in v8, such as compiler thread, main thread, profiler thread and garbage colleciton thread. 

## History of Javascript

Javascript was mostly an interpreted language

Every line is interpreted and executed one after the other


## What is a call stack?

a  to do list of function invocations , LIFO
the main function is called at the beginning of every compilation. It is at the base of every call stack. 

# Defining Functions in JavaScript

## Function declaration
function name (1, 2, 3) {
  statement
}

## Function expression
function [name] (1, 2, 3, ) {
  statement
}

Anonymous function
```
var myFunction = function() {
    statements
}
```

named function
```
var myFunction = function namedFunction(){
    statements
}
```

invoked once
```
(function() {
    statements
})();
```


generator functions
```
function* name([param[, param[, ... param]]]) {
   statements
}
```

## Arrow functions
arrow function syntax is simply Identifier => Expression.
You get to skip typing function and return, as well as some parentheses, braces, and a semicolon.

Arrow functions do not have their own this value. The value of this inside an arrow function is always inherited from the enclosing scope.

function (a, b) {
  return a + b;
};

equivalent to

(a, b) => a + b;

## Event loop
look at stack and look at task queue, if stack is EMPTY, it take executables from the task queue and pushes it at the stack 

executables are pushed to task queue are when executables need to be done asychronously  

task queue can be split into render queue and callback queue

render queue has higher prioirty then callback queue but needs stack to be clear to run


## Object.Create 
The Object.create() method creates a new object, using an existing object as the **prototype** of the newly created object.


 This is due to the important difference that new Dog actually runs constructor code, 
 whereas Object.create will not execute the constructor code.


The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.