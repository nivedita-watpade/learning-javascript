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

👉 Simple Meaning:A Promise is a container for a value that will be available in the future.

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
