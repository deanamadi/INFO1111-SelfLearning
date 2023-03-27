// Lexical Scoping (Static Scope)

/* 
Global Scope -  defined outside of all code blocks
Local Scope - defined inside a code block
In a scope you can access variables defined in that scope, or in any parent/ancestor scope
*/


// Global Scope (varOne)
    // Local Scope (varTwo)
        // Local Scope (varFour)
    // Local Scope (varThree)

let varOne = "varOne";

if (true) {
  console.log(varOne);
  let varTwo = "varTwo";
  console.log(varTwo); // Will print out varTwo

  if (true) {
    let varFour = "varFour";
  }
}

if (true) {
  let varThree = "varThree";
}

// This will produce an error, as varTwo was defined within the "if" code-block
// console.log(varTwo)

// Vairable Shadowing: You can use the same variable name in different scopes

let name = "Deana";

if (true) {
  let name = "David";

  if (true) {
    console.log(name); // will return David, not Deana
  }
}

if (true) {
  console.log(name); // will return Deana
}

/*
If a variable is not defined within its scope, it will travel to the parent scope, and so forth
If it reaches the root, and the variable is still not defined, it is implicitly declared (Leaked Globals)
Implications: assigning a new value to a variable can create a new global variable, even if the assignment occured within nested if blocks
*/

let num = 1;

if (true) {
  let num = 2; // can define variables in diff scopes.
  console.log(num);
  if (true) {
    num = 3; // if previous 'let' was removed, num would have been defined globally
    console.log(num);
  }
}

if (true) {
  console.log(num);
}
