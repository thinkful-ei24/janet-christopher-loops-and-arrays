//What is scope? Your explanation should include the idea of global vs. local scope.
/* Scope deals with the accessibility of variables. Global variable is accessible and stored in memory for the entirety of 
the programs duration. This is opposed to local scope in which a local variable is only accessible wi
its child's block. 

//Why are global variables avoided?
// So this has to do with scope. For example global variables can have unintended consequences within the duration of a program. 
For example if a global variable has the same name as a locally declared variable then the local variable takes precedence and its
value becomes the new declared values. So that global value is now changed even if we didn't want it to be. If another function is declared and is 
dependent on the global variable's original value, then this has the potential to break the program. It also creates harder bugs to catch.


//Explain JavaScript's strict mode
//This is not used in ES6, only ES5. It prohibits certain syntax. It resttricts being able to create a global variable if a var, let, or const 
keyword is not declared. It throws errors and alerts the user when trying to create a global variable. Strict mode is a more secure way
of writing javaScript (for example keeping passwords secure).


//What are side effects, and what is a pure function?
//A side effect is when a variable goes outside of its scope and starts changing other values. A well written function should always return the 
same expected value. When it doesn't it's called indeterminate. When a function is always running as expected without side effects, it is called
a pure funtion. 