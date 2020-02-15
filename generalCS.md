# General CS Concepts

## Interpreted vs Compiled Language

The purpose of software is for other people to use. 



When executing code, 

Compiled languages convert source code to binary execetuables FIRST before sending to it a user. The entire binary is in its executable form, ready for the computer to execute. 

Interpreted languages send the orginal source code, and the interpretor goes thru 1 line at a time, converting each line to its binary equivalent, each line is executed.

Not cross platform meaning you need to compile different sets of binaries for linux, mac and windows systems as they are read binaries differently. 


| Compiled Language | Pros                        | Cons                                                                    |
|-------------------|-----------------------------|-------------------------------------------------------------------------|
|                   | Fast Source, Code is private | Not cross-platform,  requires extra compiling step,  longer to develop in |


| Interpreted Language | Pros                                            | Cons                        |
|----------------------|-------------------------------------------------|-----------------------------|
|                      | Cross Platform,  No extra step,  Easier debugging | Slower,   Public Source code |






## Intermediate Language (improvement on the current system)
Other known as Bytecode,

Programmers would now compile their code into bytecode (IL) and send that to the consumer, the IL has been slightly optimzed. IL will use the JIT Compiler to convert to even more optimzed machmachine code. 

## JIT Compiling
The JIT compiler compiles the bytecode of that method into native machine code, compiling it "just in time" to run. 


## Typical Compiled languages
C, C++, Objective C


## Typical interpreted languages
php, javascript, java, C#, Python


## Explain Dynamic, Strongly, Weak and Statically typed languages

The process of verifying and enforcing constraints of type, boils down to 
checking at COMPILE (STATIC) or RUN-TIME (DYNAMIC)

If a language specification requires its typing rules strongly (i.e., more or less allowing only those automatic type conversions that do not lose information), one can refer to the process as Strongly typed, if not, as Weakly typed.

### Static 

common examples: java, C, C++
Once a variable has been declared a type, it cannot be assigned to a different type

Static typing usually results in compiled code that executes more quickly because when the compiler knows the exact data types that are in use, it can produce optimized machine code (i.e. faster and/or using less memory)

### Dynamic 
common example: JavaScript, Objective-C, PHP, Python, Ruby, Lisp, and Tcl
Variables are bound to objects instead at run-time, which it makes it possible  to assign
different types to the same variable

Is less optimized, but no compilation step means shorter debug cycles


### Strongly Typed
A strongly-typed language is one in which variables are bound to specific data types, and will result in type errors if types do not match up as expected in the expression — regardless of when type checking occurs.

```
temp = “Hello World!”
temp = temp + 10; // program terminates with below stated error
```

### Weakly Typed

A weakly-typed language on the other hand is a language in which variables are not bound to a specific data type; they still have a type, but type safety constraints are lower compared to strongly-typed languages.

```
$temp = “Hello World!”;
$temp = $temp + 10; // no error caused
echo $temp;
```



![Image of the 4](https://miro.medium.com/max/1648/1*BddwVWW6hFU0miT9DCbUWQ.png)

