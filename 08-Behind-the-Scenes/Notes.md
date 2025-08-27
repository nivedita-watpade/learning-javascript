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

8)Non-blocking event loop - Event loop: takes long running tasks, execute them in the background, and puts them back in the main thread once they are finished

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
sayMyName() is the arrow function therefore, its execution context will not contain arguments and this keyword
-After that in sayMyName() function body there is getName() called. So new execution context(Its contain local varibale, arguments) is created for getName() and its pushed into the call stack.
-After the getName() return its popped from the stack and next execution of sayMyName() will be start. After sayMyName() returns it also popped from the stack and then Global Execution Context execute.
-Once we closed the browser or browser window Global Execution Context popped and stack will be empty
