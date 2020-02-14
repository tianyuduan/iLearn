#iLearn

## Javascript

### Understanding Javascript 

There are APIs in the browser that have been used by almost any JavaScript developer out there (e.g. “setTimeout”). Those APIs, however, are not provided by the Engine.

We have the Engine but there is actually a lot more. We have those things called Web APIs which are provided by browsers, like the DOM, AJAX, setTimeout and much more.
And then, we have the so popular event loop and the callback queue.

JavaScript is a single-threaded programming language, which means it has a single Call Stack. Therefore it can do one thing at a time.
The Call Stack is a data structure which records basically where in the program we are. If we step into a function, we put it on the top of the stack. If we return from a function, we pop off the top of the stack. 

Each entry in the Call Stack is called a Stack Frame.

What happens when you have function calls in the Call Stack that take a huge amount of time in order to be processed?

the solution is asynchronous callbacks


## What is a Javascript engine

software that converts javascript code to machine code, then executed by CPU of machine. Each browser has different javascript engine, Chrome uses v8 engine, firefox uses spidermonkey, etc. 

v8 is a multi-threaded program written in c++, 1 functionality -> convert code written to it into optimized machine code

employs a technique called "JIT / just in time" compilation (used in node as well)


## History of Javascript

Javascript was mostly an interpreted language

Every line is interpreted and executed one after the other

it uses full-codegen to compile into machine code

and crankshaft to optmize the machine code

There are many threads in v8, such as compiler thread, main thread, profiler thread and garbage colleciton thread. 


## what is a call stack?

a  to do list of function invocations , LIFO
the main function is called at the beginning of every compilation. It is at the base of every call stack. 





