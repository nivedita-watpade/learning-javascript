// SECTION B – Scenario-Based Reasoning
// 11. UI Freeze Scenario
// A page becomes unresponsive while loading data, even though fetch() is used. Explain:
// -Why this can still happen
// -What kind of code usually causes this issue
// -How such situations can be prevented

//Ans:  Fetch is also asynchronous, and the before and after code of fetch, if it is synchronous, then it runs in the main stack, i.e., the call stack. If synchronous code is heavy, then it causes issues. If we use a timer function like setTimeout, then we prevent it.

// 12. Silent Failure Scenario
// A developer reports that API failures are not visible in the UI. Explain:
// -Where errors might be getting lost
// -How Promise error handling should be structured
// -Why ignoring errors is dangerous

//Ans: If we can not properly handle promise in that case we lost the error. If we can not properly stecture the catch block in that case  we lost error. So we should properly set catch block. In some cases like if API resposne give you status 403,404 in that case we have to manually throw the error.If we ignore the error we get wrong data and dislay on the UI.

//13.Sequential Dependency Scenario
// You must fetch user data, then fetch user permissions, and only then render the dashboard. Explain:
// Why these steps must be sequential
// Which async approach is most readable
// How failure at any step should be handled

//Ans:

// 14. Parallel Requests Scenario
// You need to load products, categories, and offers, all of which are independent. Explain:
// Whether these should run sequentially or in parallel
// Which Promise utility is most suitable
// What should happen if one request fails

//Ans: As products, categories, and offers are independent in that case its not a point to run sequentially bcoz its increase the load time. We have to run it in parallel way to improve load time and performance for the we used Promise.all() method. In promise all resolved only when all the succeed

// 15. Delayed Timers Scenario
// A setTimeout scheduled with 0ms delay runs later than expected. Explain:
// Why this happens
// Which queue is involved
// How Promises affect execution order

//Ans: setTimeout(0) is not immediate because its callback is placed in the macrotask queue and can only run after the call stack is empty and all microtasks i.e Promise callbacks have finished, so heavy synchronous or heavy promise code can delay it.

// =====================================================================================================

// SECTION C – Practical Problem Solving
// Promise-Based Validation
// Create a function that:
// Returns a Promise
// Resolves if input length is valid
// Rejects otherwise
// Explain where .then() and .catch() should be used.

function validateLength(str) {
  return new Promise(function (resolve, reject) {
    if (str.length > 0) {
      resolve('Valid String');
    } else {
      reject('Invalid String');
    }
  });
}
validateLength('Hello')
  .then(res => console.log(res))
  .catch(err => console.log(err));

//   Fetch with Guaranteed Cleanup
// Write a function that:
// Fetches data from an API
// Converts the response to JSON
// Handles errors correctly
// Logs "Request completed" in all cases

function fetchData(url) {
  fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }
      return res.json();
    })
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(() => console.log('Request completed'));
}

fetchData(`https://restcountries.com/v2/name/india?fullText=true`);

// Async/Await Conversion
// Rewrite Promise-based code using async/await and explain:
// Where try should be used
// Where catch should be used
// Why this improves readability

async function fetchData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log('Request completed');
  }
}
fetchData(`https://restcountries.com/v2/name/india?fullText=true`);

// SECTION D – Advanced Runtime & Event Loop Scenarios
// 19. A long-running calculation is placed inside a .then() callback. Explain:
// How this affects the Event Loop
// Why UI updates may be delayed
// Which queue is blocked
//Ans: long-running calculation inside a .then() is block a main thread when macrotasks queue is running event loop must wait until all the tasks done and after that event loop can pick another task coz macrotask has the highest priority and if they take time then eventually UI updates may b delayed.

//20. You load data from multiple APIs using a Promise utility. Explain:
// What happens if one API fails
// How failure strategy affects user experience
// When partial success is acceptable

//Ans: If all API data is needed, Promise.all() stops everything when one request fails, but if  partial success is acceptable Promise.allSettled() allows the page to load even if some requests fail.

// SECTION E – Deep Reasoning
// 21. Explain how the JavaScript Runtime enables asynchronous behavior even though JavaScript is single-threaded. Include:
// Call Stack
// Web APIs
// Callback Queue
// Microtask Queue
// Event Loop

// Ans:
// Call stack : The call stack is a place where JavaScript executes code step by step.Whenever function is called it goes in call stack and after execution complete it pooped.

// Web APIs: WEB API's i a environment provided by browser where asynchronus tasks like timers and data requests run in the background, so JavaScript does not have to stop while waiting for them.

// Callback queue: The callback queue is where the browser places functions that are ready to run after background tasks finish, such as timers or user events. These callbacks wait in the queue until the call stack is empty, and then the event loop moves them to the stack so they can run.

//Microtask Queue: Is a place where Promise callbacks are placed after the background execution complete. This tasks i.e microtasks queue run before the callback queue coz it has more priority

//Event loop: It constantly checks if the call stack is empty, then takes tasks from the microtask queue first and then callback queue and put them into the callstack for execution.

//22. Analyze the following Promise chain and explain execution order, error handling, and cleanup:
Promise.resolve('Start')
  .then(res => {
    console.log(res);
    throw new Error('Fail');
  })
  .catch(err => console.log(err.message))
  .finally(() => console.log('Done'));

//Start
//Fail
//Done

//   Promise resolve then runs and log the res . then we throw the error and error catch in catch block and print. And promise resolve or reject  finally runs in both the case .

// CHALLENGE 1 – Sequential Async Tasks
// Create an async function that performs three asynchronous tasks sequentially. Each task must start only after the previous task has completed. If any task fails, execution must stop immediately and no further tasks should run.

function taskZer0() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      // console.log('Task 0 Completed');
      reject('Something Went Wrong...!');
    }, 1000);
  });
}

function taskOne() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('Task 1 Completed');
      resolve('Task1');
    }, 1000);
  });
}

function taskTwo() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('Task 2 Completed');
      resolve('Task2');
    }, 1500);
  });
}

function taskThree() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log('Task 3 Completed');
      resolve('Task3');
    }, 1000);
  });
}

async function allTask() {
  try {
    const res1 = await taskOne();
    const res2 = await taskTwo();
    console.log(res1, res2);
  } catch (err) {
    console.log(err);
  }
}

//allTask();

// CHALLENGE 2 – Parallel Async Tasks
// Create a function that receives multiple asynchronous tasks and starts all of them at the same time. Once all tasks complete, collect and display the results together. Errors must be handled properly without silent failures.

async function multipleTask(tasks) {
  try {
    const res = await Promise.all(
      tasks.map(task => {
        task();
      }),
    );
  } catch (err) {
    console.log(err);
  }
}

multipleTask([taskOne, taskTwo, taskThree]);

// CHALLENGE 3 – Fastest Successful Result
// Create a function that triggers multiple asynchronous operations simultaneously and returns the first successful result. If all operations fail, the function must fail gracefully.

async function fastSuccessFunction(arr) {
  try {
    const res = await Promise.any(arr.map(task => task()));
    return res;
  } catch (err) {
    console.log('All tasks failed:', err.message);
  }
}

fastSuccessFunction([taskZer0, taskOne, taskTwo]).then(result => {
  console.log('Fastest Successful Result', result);
});

// CHALLENGE 4 – Partial Success Collection
// Create a function that executes several asynchronous operations in parallel. Both successful results and failures must be collected. Execution must not stop when some operations fail, and the final output must clearly separate successes from failures.
