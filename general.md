# GENERAL

## Interpreted vs Compiled language

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






## intermediate Language (improvement on the current system)
Other known as Bytecode,

Programmers would now compile their code into bytecode (IL) and send that to the consumer, the IL has been slightly optimzed. IL will use the JIT Compiler to convert to even more optimzed machmachine code. 

## JIT Compiling
The JIT compiler compiles the bytecode of that method into native machine code, compiling it "just in time" to run. 


## Typical Compiled languages
C, C++, Objective C


## Typical interpreted languages
php, javascript, java, C#, Python