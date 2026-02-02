What is Synchronous in JavaScript?
Synchronous means that code is executed one line at a time, in order, and each operation must finish before the next one starts.
👉 JavaScript waits for the current task to complete before moving to the next task.

Blocking Behavior (Important):
Synchronous code is blocking, meaning:
-If one task takes a long time ⏳
-The next tasks must wait

Example:
function heavyTask() {
for (let i = 0; i < 1000000000; i++) {}
}

console.log("Start");
heavyTask();
console.log("End");

"End" will print only after heavyTask() completes.

===============================================================================

Asynchronous in JavaScript
🔹 Definition: Asynchronous JavaScript means code execution does NOT wait for a task to complete.
Long-running tasks run in the background, and the next code continues executing.

JavaScript starts a task and moves on to the next task without waiting for the first one to finish.

👉 It is non-blocking behavior.

Ex.
console.log("Start");

setTimeout(() => {
console.log("Hello");
}, 2000);

console.log("End");
//op
Start
End
Hello

Explanation:
1️⃣ "Start" prints first
2️⃣ setTimeout waits 2 seconds in background
3️⃣ "End" prints immediately
4️⃣ After 2 seconds → "Hello" prints

===========================================================================

AJAX

What is AJAX?
AJAX stands for:
Asynchronous
JavaScript
And
XML

AJAX is a technique that allows web pages to send and receive data from a server asynchronously without reloading the entire page.

AJAX updates part of a webpage without refreshing the whole page.

👉 It makes websites faster and more interactive.

==================================================================================

API (Application Programming Interface):
API (Application Programming Interface) is a piece of software that allows different applications to communicate with each other.

API acts as a bridge between two applications so they can talk to each other.

It helps one program request data or services from another program.

API allows applications to communicate with servers and exchange data using formats like JSON, often through AJAX.

==========================================================================

What Happens When We Access a Web Server (Short Notes)

1. DNS Lookup
   Browser asks DNS to convert the website name (URL) into an IP address.

2. TCP/IP Connection
   Browser creates a secure connection with the web server.

3. HTTP Request
   Browser sends a request to the server.
   It includes:
   -Start line (GET/POST + URL + HTTP version)
   -Headers (browser info, language, etc.)
   -Body (only for POST/PUT requests)

4. HTTP Response
   Server sends back a response.
   It includes:
   -Status line (200 OK, 404 Not Found, etc.)
   -Headers (content type, date, etc.)
   -Body (HTML data)

5. Page Loading
   Browser loads index.html first, then downloads CSS, JS, images.
   This process repeats for each file.

=================================================================================

JavaScript Promises

🔹 What is a Promise?
👉 Definition (Formal): A Promise is an object that acts as a placeholder for the future result of an asynchronous operation.

👉 Simple Meaning: A Promise is a container for a value that will be available in the future.

👉 Example:
-Response from an AJAX / Fetch API call
-File loading
-API data fetching

🔹 Why Promises Are Used?

- Handle asynchronous operations easily
- Avoid callback functions
- Prevent callback hell
- Enable chaining of async operations
- Cleaner and readable code

Promise Lifecycle (States):
A Promise goes through 3 main states:

🟡 1. Pending
Initial state
Async task is still running
Value is not available yet
Example:
API request is in progress

🟢 2. Fulfilled (Resolved)
Operation completed successfully
Result is available
Example:
Data received from server

🔴 3. Rejected
Operation failed
Error occurred
Example:
Network error / Server error

Settled State
When a promise is either fulfilled or rejected, it becomes:
-Settled: (Settled = Finished state)

🔹 Promise Flow (Lifecycle Process)
Pending
↓
Async Task Finished
↓
Settled
↙ ↘
Fulfilled Rejected

=================================== fetch ========================================

What is Fetch?
Fetch API is a modern JavaScript method used to request data from a server (API) and receive responses asynchronously.

-Fetch is used to get or send data to a server without reloading the page.
-Fetch always returns a Promise

👉 It is used to make HTTP requests like GET, POST, PUT, DELETE.

So we use:
.then()
.catch()
or
async/await

🔹 Basic Fetch Example (GET Request)
fetch("https://api.example.com/users")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

🔍 How It Works:
1️⃣ Fetch sends request to server
2️⃣ Server sends response
3️⃣ Response converted to JSON
4️⃣ Data is used in app

===========================================================================

✅ .then(), .catch(), and .finally() in JavaScript (Promises)

These methods are used to handle Promise results.

1. .then() — Success Handler - Used to handle the fulfilled (successful) result of a Promise.
   -Runs when the promise is resolved successfully.
   Syntax:
   promise.then(result => {
   // handle success
   });
   Ex.
   fetch(url)
   .then(response => response.json())
   .then(data => console.log(data));

2. .catch() — Error Handler
   -Used to handle errors or rejected promises.
   -Runs when something goes wrong.
   Syntax:
   promise.catch(error => {
   // handle error
   });
   Example:
   fetch(url)
   .then(response => response.json())
   .catch(error => console.log(error));

3. .finally() — Always Runs
   -Runs no matter what happens(success or error)
   Used for:
   ✔ Stop loader
   ✔ Hide spinner
   ✔ Cleanup tasks
   Syntax:
   promise.finally(() => {
   // always executed
   });
   Example:
   fetch(url)
   .then(res => res.json())
   .then(data => console.log(data))
   .catch(err => console.log(err))
   .finally(() => {
   console.log("Request Completed");
   });

   Execution Flow
   Promise
   ↓
   .then() → Success
   ↓
   .catch() → Error
   ↓
   .finally() → Always runs

===================================================

🔹 What is throw?
-throw is used to manually create and send an error in JavaScript.
-👉 It stops normal code execution and jumps to the nearest catch block.
Syntax
throw new Error("Error message");

new Error() is used to create a new Error object with a custom error message.
👉 It represents an error that occurs in your program.

===================================================================

Runtime & Asynchronous Behavior

1. What is JavaScript Runtime?
   JavaScript Runtime is a container/environment that provides everything needed to execute JavaScript code.
   It includes:
   -JavaScript Engine
   -Web APIs
   -Event Loop
   -Callback Queue
   -Microtask Queue
   Examples of runtime environments:
   -Browser (Chrome, Firefox, Edge)
   -Node.js

Concurrency Model (Important Concept)
JavaScript uses a single-threaded concurrency model.
👉 This means:
-Only one piece of code executes at a time
-No true parallel execution in the call stack
-Uses asynchronous behavior to handle multiple tasks efficiently

JavaScript Engine (Heart of Runtime)
The JS Engine contains:
✅ Call Stack
-Where JavaScript code is executed
-Follows LIFO (Last In First Out)
-Only one function runs at a time
Ex.
function a() {
b();
}

function b() {
console.log("Hello");
}

a();

Execution order:
a() → b() → console.log()

✅ Heap
-Memory area where objects and variables are stored
-Used for dynamic memory allocation

Web APIs (Provided by Browser)
Web APIs are not part of JavaScript.
They are provided by the browser:
Examples:
-DOM API
-fetch()
-setTimeout()
-Event Listeners
-Geolocation API
👉 They handle asynchronous tasks.

How Asynchronous Code Works (Behind the Scenes)

Step 1: Code Enters Call Stack
When JS code runs:
-Global Execution Context is pushed into call stack
-Synchronous code executes immediately

Step 2: Async Function Goes to Web API
Ex.
setTimeout(() => {
console.log("Timer done");
}, 2000);

What happens:
-setTimeout() is sent to Web API
-Timer starts in background
-Call stack continues executing other code

Step 3: Callback Moves to Queue
After async task finishes:
Callback is placed into:
-Callback Queue (for events, timers)
-Microtask Queue (for Promises)

Callback Queue (Task Queue)
Contains callbacks from:
-setTimeout
-DOM events (click, scroll)
-setInterval
Example:
click → timer → event callbacks

Microtask Queue (High Priority Queue)
Used for:
-Promises (.then, .catch, .finally)
-MutationObserver

👉 It has higher priority than callback queue.

fetch(url).then(res => console.log(res));

Ex.fetch(url).then(res => console.log(res));
The .then() callback goes into:
➡ Microtask Queue

Event Loop (The Controller)
Event Loop is responsible for:
✔ Checking call stack
✔ Checking microtask queue
✔ Checking callback queue
✔ Moving tasks to call stack

📌 Event Loop Priority Order

When Call Stack is empty:
1️⃣ Microtask Queue (First Priority)
All promise callbacks execute first

2️⃣ Callback Queue (Second Priority)
Timers and event callbacks execute after microtasks

Example Flow
console.log("Start");

setTimeout(() => {
console.log("Timer");
}, 0);

Promise.resolve().then(() => {
console.log("Promise");
});

console.log("End");

Output:
Start
End
Promise
Timer

Why?
Execution order:
Synchronous code → Start, End
Microtask queue → Promise
Callback queue → Timer

📌 Important Points

✅ JavaScript is single-threaded
✅ Web APIs handle async tasks
✅ Event Loop manages execution
✅ Promises execute before timers
✅ Call Stack executes one task at a time

📌 Why Async Code is Non-Blocking?
Because:
-Heavy tasks run in Web APIs
-JS engine keeps running other code
-Event loop schedules callbacks later

👉 This makes JavaScript non-blocking and fast.

=========================================================================================

Events loop in practice

Ex.
console.log('Test Start');

setTimeout(() => console.log('Execute after 0 sec'), 0);

Promise.resolve('Resolve promise 1').then(res => console.log(res));
Promise.resolve('Resolve promise 2').then(res => {
for (let i = 0; i < 10000000000; i++) {}
console.log(res);
});

console.log('Test End');

Execution Flow
1️⃣ Synchronous Code Runs First (Call Stack)
JavaScript executes synchronous code line by line.
console.log('Test Start');

2️⃣ setTimeout() is Registered (Callback Queue)
setTimeout(() => console.log('Execute after 0 sec'), 0);

Does NOT run immediately
Goes to Web API
After 0 ms → moves to Callback Queue
Will wait until:
-Call stack is empty
-Microtask queue is empty

3️⃣ Promise.then() Goes To Microtask Queue
Promise.resolve('Resolve promise 1')
Promise.resolve('Resolve promise 2')

Promise callbacks go to Microtask Queue
Microtasks have higher priority than setTimeout

-Second Promise (Heavy Loop)
This is blocking code:
-Blocks main thread
-Delays everything else
-setTimeout must WAIT
-After loop finishes:

//Output
Test Start
Test End
Resolve promise 1
Resolve promise 2
Execute after 0 sec

Call Stack
↓
Microtask Queue (Promise.then)
↓
Callback Queue (setTimeout)

============================================================

Building Promises (Creating Promises)

Syntax (Creating a Promise)
const myPromise = new Promise((resolve, reject) => {
// async task
});

resolve(value) → when task is successful
reject(error) → when task fails

Ex.
const getData = new Promise((resolve, reject) => {
let success = true;

if (success) {
resolve("Data fetched successfully");
} else {
reject("Error while fetching data");
}
});

getData
.then(result => console.log(result))
.catch(error => console.log(error));

Promisifying (Converting Callback to Promise)
What is Promisifying?
Promisifying means converting a callback-based function into a Promise-based function.

Ex.
function fetchDataPromise() {
return new Promise((resolve, reject) => {
setTimeout(() => {
resolve("Data received");
}, 1000);
});
}

======================== async / await =================================================

✅ Async / Await in JavaScript — Definition
Async/Await is a modern JavaScript syntax used to handle asynchronous operations in a synchronous-looking way, making code cleaner, more readable, and easier to debug.
It is built on top of Promises.

Async/Await is a JavaScript feature that allows handling asynchronous code using synchronous syntax, improving readability and error handling.

✅ Key Points
-async keyword → makes a function return a Promise
-await keyword → pauses execution until the Promise is resolved
-Works only inside async functions
-Avoids .then() chaining and callback hell

Ex.
const myPosition = async function (country) {
const res = await fetch(
`https://restcountries.com/v2/name/${country}?fullText=true`,
);
const data = await res.json();
console.log(data);
};

const myPosition = async function (country)
async keyword → Makes the function return a Promise and allows using await.

const res = await fetch(`https://restcountries.com/v2/name/${country}?fullText=true`);
fetch() → Sends an API request to get country data.
await → Waits until the API response is received.
res → Stores the HTTP response object.

const data = await res.json();
res.json() → Converts response body into JavaScript object.

await → Waits until JSON parsing is completed.

console.log(data);
console.log() → Prints the country data in console.

============================================= try...catch in JavaScript===============================

try...catch is used to handle runtime errors (exceptions) so that your program does not crash and can continue running.

Syntax:
try {
// Code that may cause an error
} catch (error) {
// Code to handle the error
} finally {
// (Optional) Always runs
}

Ex.
try {
let result = 10 / x; // x is not defined
console.log(result);
} catch (error) {
console.log("Error occurred:", error.message);
}

//output
Error occurred: x is not defined

================================ returning values from async function ==========================
In JavaScript, an async function always returns a Promise. So when you “return a value”, it is automatically wrapped inside a Promise.

Ex.
async function getNumber() {
return 10;
}

getNumber().then(result => {
console.log(result); // 10
});
👉 return 10 becomes Promise.resolve(10)

async function getUser() {
const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
const data = await res.json();
return data;
}

getUser().then(user => {
console.log(user);
});

Using await to Get Returned Value:
You can also handle it inside another async function:

async function main() {
const result = await getNumber();
console.log(result); // 10
}
main();

//Re - throwing
async function fetchUser() {
try {
const res = await fetch('https://jsonplaceholder.typicode.com/users/1');

    if (!res.ok) {
      throw new Error("API request failed");
    }

    const data = await res.json();
    return data;

} catch (error) {
console.log("Inside function:", error.message);

    // Rethrow error to caller
    throw error;

}
}

async function main() {
try {
const user = await fetchUser();
console.log(user);
} catch (err) {
console.log("Handled in main:", err.message);
}
}

main();

================================== Promise.all() in JavaScript ==================================

1. Promise.all() in JavaScript

Promise.all() - is used to run multiple promises in parallel and wait until all of them are resolved.
Syntax:
Promise.all(iterable)

-Takes an array (or iterable) of promises
-Returns a new Promise
-Resolves when all promises resolve
-Rejects if any one promise fails

2. Promise.race()
   Promise.race() returns the result of the FIRST settled promise:
   -Can be resolve OR reject
   -Whichever finishes first wins
   Ex.
   const p1 = new Promise(resolve =>
   setTimeout(() => resolve("Fast"), 1000)
   );

const p2 = new Promise(resolve =>
setTimeout(() => resolve("Slow"), 3000)
);

Promise.race([p1, p2])
.then(result => console.log(result));

// Output: Fast

3. Promise.allSettled()
   Promise.allSettled() waits for ALL promises to finish:
   -Doesn't fail on error
   -Returns status + value/reason
   -Always resolves

Ex. const p1 = Promise.resolve(100);
const p2 = Promise.reject("Error");
const p3 = Promise.resolve(300);

Promise.allSettled([p1, p2, p3])
.then(result => console.log(result));
//op
[
{ status: "fulfilled", value: 100 },
{ status: "rejected", reason: "Error" },
{ status: "fulfilled", value: 300 }
]

4. Promise.any()
   Promise.any() returns the FIRST SUCCESSFUL promise:
   -Ignores rejected promises
   -Rejects only if ALL promises fail
   -Returns single value

Ex.
const p1 = Promise.reject("Fail 1");
const p2 = Promise.resolve("Success");
const p3 = Promise.reject("Fail 2");

Promise.any([p1, p2, p3])
.then(result => console.log(result))
.catch(err => console.log(err));

//op Success

✔ Promise.all → "All or nothing" (all resolve)
✔ Promise.race → "First finished wins" (First resolve or reject)
✔ Promise.allSettled → "Wait for all, no failure" (all resolve and reject)
✔ Promise.any → "First success wins" (first reolved value)
