// ===============================
// 🧩 LEVEL 1 — PROMISES BASICS
// ===============================

// 1️⃣ Delay function
function delay(ms) {
    // TODO: return a Promise that resolves after ms milliseconds
return new Promise((resolve) => setTimeout(resolve,ms))

}

// Example:
 // delay(2000).then(() => console.log("2 seconds passed"));

// ---------------------------------------------------------

// 2️⃣ Random outcome
function randomTask() {
    // TODO: Return a Promise that resolves half the time and rejects half the time
    // Hint: Use Math.random()
   return new Promise((resolve, reject) =>
       Math.random() < 0.5 ? resolve("done!") : reject("other half"))
}

// Example:
// randomTask().then(console.log).catch(console.error);

// ---------------------------------------------------------

// 3️⃣ Chain Promises
function chainedTasks() {
    // TODO: Wait 1s, then call randomTask, then log success or failure.
    // Hint: Use delay + .then() chaining
    delay(1000).then(randomTask).then(console.log).catch(console.error)
}

// Example:
// chainedTasks();


// ===============================
// ⚙️ LEVEL 2 — ASYNC/AWAIT
// ===============================

// 4️⃣ Rewrite with async/await
async function asyncTasks() {
    // TODO: Rewrite the chain using async/await and try/catch
    try {
        await delay(1000)
        return await randomTask();
    } catch(e) {console.error('Error occurred:',e)}
}

// Example:
// asyncTasks().then(r => console.log(r)).catch(e => console.error(e));

// ---------------------------------------------------------

// 5️⃣ Sequential vs Parallel Execution

const tasks = [
    () => delay(1000).then(() => "Task 1 done"),
    () => delay(2000).then(() => "Task 2 done"),
    () => delay(1500).then(() => "Task 3 done"),
];

async function runSequential(tasks) {
    try {
        for (let task of tasks) {
            let result = await task();
            console.log(result);
        }
        return "All tasks completed!"
    } catch(e) {console.error(e)}
}

async function runParallel(tasks) {
    // TODO: Run all tasks in parallel and wait for all to finish
    try {
        return Promise.all(tasks.map(task => task()))
    } catch (e) {console.error(e)}
}

// Example:
// runSequential(tasks).then(console.log);
// runParallel(tasks).then(console.log);


// ===============================
// 🌐 LEVEL 3 — REAL-WORLD PRACTICE
// ===============================

// 6️⃣ Fetch user data
async function getUserData(id) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {  // Check for successful response
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json(); // Return the data
}

// Example:
// getUserData(1).then(console.log);

// ---------------------------------------------------------

async function getMultipleUsers(ids) {
    // TODO: Fetch multiple users in parallel
    try{
        return Promise.all(ids.map(id => getUserData(id)))
    } catch (e) {console.error(e)}
}

// Example:
getMultipleUsers([1, 2, 3]).then(console.log);

// ---------------------------------------------------------

// 7️⃣ Handle errors gracefully
async function safeFetchUser(id) {
    // TODO: Wrap fetch in try/catch and handle errors clearly
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        return await response.json();
    } catch (e) {console.error(e)}

}

safeFetchUser(1).then(console.log)
// Example
// safeFetchUser(99999).then(console.log);


// ===============================
// 🕓 LEVEL 4 — ADVANCED CHALLENGES
// ===============================

// 8️⃣ Time-limited fetch
async function fetchWithTimeout(url, timeout) {
    // TODO: Use Promise.race between fetch and a timeout promise
}

// Example:
// fetchWithTimeout("https://jsonplaceholder.typicode.com/posts/1", 1000)
//   .then(res => res.json())
//   .then(console.log)
//   .catch(console.error);

// ---------------------------------------------------------

// 9️⃣ Retry on failure
async function fetchWithRetry(url, retries = 3) {
    // TODO: Try fetching up to `retries` times, waiting 1s between failures
}

// Example:
// fetchWithRetry("https://jsonplaceholder.typicode.com/posts/1", 3)
//   .then(res => res.json())
//   .then(console.log)
//   .catch(console.error);

// ---------------------------------------------------------

// 🔟 Promise Pool (Concurrency Control)
async function promisePool(tasks, limit) {
    // TODO: Run only `limit` tasks at once until all are complete.
    // Hint: Keep track of running tasks and await Promise.race when full.
}

// Example:
/*
const slowTasks = Array.from({ length: 5 }, (_, i) => () =>
  delay(1000).then(() => `Task ${i + 1} done`)
);
promisePool(slowTasks, 2).then(console.log);
*/

// ===============================
// END OF FILE
// ===============================