Highlevel overview of javascript:

1)High-level - Javascript is a high level programming langauge where we dont have to manually manage memory/resources like low level langauges(C, C++, Rust).

2)Garbage-Collection - Its a program which cleans the memory time to time. (Frees memory of unused variables or objects.)

3)Interpreted or just-in-time compiled - Its a way, javascript engine converts javascript code into the machine code(binary code).

4)Multi-paradigm (Paradime)- Paradigm(Is an approach and an overall mindset of structuring of code whcih will direct your coding style & technique)
-Procedure programming
-Object-oriented programming(OOP)
-Function programming(FP)

5)First-class function - In a language with first-class function, functions are simply treated as variables. We can pass them into other functions, and return them from functions.
Ex. closeBtn.addEventListener('click', toggleModal);
Here, toggleModal is a First-class function.

6)Dynamic - Javascript is dynamically typed lagnauge which means we dont have to assign data type to varibale manually. Javascript engine assigns a datatypes at the run time. We can also reassign value to the varibale with different datatype.

7)Single-threaded -
Concurrency model - how the js engine handles a multiple tasks happening at the same time.
Javascript runs in one single thread, so the can only do one thing at a time.
Thread is a set of instructions

8)Non-blocking event loop - Event loop: takes long running tasks(asynchronus function/tasks), execute them in the background, and puts them back in the main thread once they are finished

Ex. console.log("Start");
setTimeout(() => {
console.log("Done after 2 sec");
}, 2000);
console.log("End");
// Output: Start, End, Done after 2 sec

================================== The JavaScript Engine and Runtime ===================================

JavaScript Engine: Its a computer program that executes the javascript code

-Each browser has its own javascript engine.
Ex. Google chrome's V8 engine

JS Engine has call stack and heap.
Call stack is a execution context where our code is executed.
Heap is a memory pool where objects(Varibale, arrays) are stored

==================== Compilation VS Interpretation VS Just-in-time(JIT) Compilation ========================

Compilation - Entire code is converted into a machine code at once, and written to binary file that can be executed by the computer or the user

Interpretation - Interpreter runs through the source code and execute it line by line

Just-in-time(JIT) Compilation - Its a combination of both Compilation and Interpretation.Entire code is converted into machine code at once, then executed immediately. Modern javascript used a Just-in-time(JIT) Compilation

==================== How Javascript engine execute the javascript code =================================

Step1(Parsing): JS engine parses(Read) our code into AST(Abstract Syntax Tree) format
Step2(Compilation): JS engine compiles AST into machine code.
Step3(Execution): Machine code executed right away

==================== JS Runtime in the browser ========================

- JS runtime in the browser contains:
  Javascript Engine(Call Stack, Heap)
  Web API's:
  Ex. DOM, Timers, Fetch API etc.

Callback queue: Its a data structure that contains asynchronus function(Callback functions) that are ready to be executed.
btn.addEventListner("click", displayMessage)
Here displayMessage is a callback function in the callback queue. Once user clicks on the button the event loop puts callback function into the stack only if stack is free or empty

================ Execution Contexts and The Call Stack ==================================

Execution Context: Environment in which a javascript code executed. Stores all the necessary information for some code to be executed.

-After compilation Global Execution Context(For top level code) is created.

-Global Execution Context contains only top level code. i.e code which is not inside the function

-There is only one Global Execution Context

-Once the top level code execution is completed execution of functions and waiting for callbacks

================= How code executed in stack ==========================

const firstName = 'Nivu';

const sayMyName = () => {
let useLess = 1;
const name = getName('Pranit');
return `My name is ${name}`;
};

function getName(passedName) {
const name = passedName;
return name;
}

sayMyName();

After the above code compilation, one Global Execution Context is created that contains the code which is not inside the function.

-Global Execution Context is created and pushed into the stack.(Global Execution Context contains firstName varibale, all functions definition)

-After that sayMyName() function called a new execution context(Its contain local varibales, function body) is created and then it also pushed into the stack.

-sayMyName() is the arrow function therefore, its execution context will not contain arguments and this keyword

-After that in sayMyName() function body there is getName() called. So new execution context(Its contain local varibale, arguments) is created for getName() and its pushed into the call stack.

-After the getName() return its popped from the stack and next execution of sayMyName() will be start. After sayMyName() returns it also popped from the stack and then Global Execution Context execute.

-Once we closed the browser or browser window Global Execution Context popped and stack will be empty

================= Scope ==========================

Scope: Space or environment in which certain variable is declared.
There is global scope, function scope, and block scope.

Global Scope:
-Outside of any function or block
-Varibale declares in global scope are accessible everywhere
Ex. const me = "Nivedita";

Function Scope:

- Varibale accessible only inside the function, Not outside
  -Also called local scope
  Ex.
  function myFunction() {
  const goodName = 'Nivedita';
  let job = 'Developer';
  var age = 24;
  }
  console.log(goodName); //ReferenceError: goodName is not defined
  console.log(job); //ReferenceError: job is not defined
  console.log(age); //ReferenceError: age is not defined

Block Scope (ES6):

-Variables are only accessible inside block(Block scoped)
-However, this only applies let and const varibale
-If we declared varibale in block scope with var is also accessible outside the block
-Functions are also block scoped(only in strict mode)
-Block scope are if, for loop etc

const year = 1992;
if (year >= 1981 && year <= 1996) {
const millenial = true;
var food = 'Pizza';
let age = 24;
}

console.log(millenial); //ReferenceError: millenial is not defined
console.log(food); // No error
console.log(age); // ReferenceError: age is not defined

================================ scope chain ===================================

Scope Chain:
Ex.

const myName = 'Nivedita';

function first() {
const age = 24;
if (age >= 30) {
const decade = 3;
var millenial = true;
}
function second() {
const job = 'teacher';
console.log(`${myName} is a ${age} old ${job}`);
}
second();
}

first();

- myName is a global scope varibale. Its access everywhere.
- child scope(second function scope) can access the parent scope(first function scope)
- parent scope (global scope or first() function scope) can't access child scope(second() function scope and if()block scope)
- var millenial is define in block scope but it accessible in first function. Coz it declared with var.
- second() is a function scope and if() is a block scope and they both are siblings and we cant access their varibale but we can access first() varibale because first() is a parent of both.

================================ Hoisting ===================================

Hoisting: Makes some types of varibales accessible/usable in the code before they are actually declared.
Examples: varibale declared with var: var myName = "Nivedita"
function Declaration : function add(a,b){return a+b;}
function expression declared with var: var addExpr = function (a, b) { return a + b;};
arrow function declared with var: var addArrow = (a, b) => a + b;

In JavaScript, hoisting is the behavior where variable and function declarations are moved (“hoisted”) to the top of their scope (global or function scope) during the compilation phase, before the code is executed.

Behind the scene:
Before execution, code is scanned for variable declarations, and for each varibalee, a new property is created in the varibale environment object.

Function declared with var, function declaration, var varibles are hoisted.
Initial value of varibales devlared with var is undefined

let and const varibale, function expression, and arrow function declread with let and const are not hoisted.
The intial value of let and const are uninitialized

Temporal Dead Zone (TDZ): is the period between the time a variable is hoisted (memory allocated) and the time it is initialized with a value.
During this time, trying to access the variable results in a ReferenceError.

-TDZ is the area where let and const varibales are not initialized yet.

if(myName === "Nivi"){
console.log(`Nivi is a ${job}`); //ReferenceError: Can't access 'job' before initailization
const age = 2037- 1989;
console.log(age);
const job = "teacher";
console.log(x); //ReferenceError: x is not defined
}

For varibale job : line no 203, 204, 205 is temporal dead zone

Each let and const varibale get their own TDZ that starts at the beginning of the scope until the line where it is defined.
Varible only safe to use after TDZ

=================================== hoisting in practice =================================

console.log(me);
// console.log(job); //ReferenceError: Cannot access 'job' before initialization
// console.log(birthYear); //ReferenceError: Cannot access 'birthYear' before initialization

var me = 'Nivedita';
let job = 'Coder';
const birthYear = 2001;

console.log(addDeclr(5, 4));
// console.log(addExpr(5, 4)); //ReferenceError: Cannot access 'addExpr' before initialization
// console.log(addArrow(5, 4)); //ReferenceError: Cannot access 'addArrow' before initialization
console.log(addExprVar);
//console.log(addExprVar(5, 9)); // Uncaught TypeError: addExprVar is not a function (we called to undefined)

function addDeclr(a, b) {
return a + b;
}

const addExpr = function (a, b) {
return a + b;
};

const addArrow = (a, b) => a + b;

var addExprVar = function (a, b) {
return a + b;
};

console.log(addExprVar(5, 9));

=========================================== this keyword ===========================================

this keyword/variable: Special Variable that is created for every execution context(every function).
Takes the value of (points to) the "owner" of the function in which the this keyword is used.

-this is NOT static. It depends on how the function is called, and its value is only assigned when the function is actually called.

Method --> this = <Object that is calling the method>

Simple function call --> this = undefined

Arrow functions --> this = <this of surrounding function>(Inherit or point to the parent)

Event listener --> this = <DOM element that the handler is attched to>
