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
