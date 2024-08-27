console.log("Welcome");

const promise1 = new Promise((resolve, reject) => {
  let completedPromise = true; // Change this to true or false as needed

  if (completedPromise) {
    resolve("Completed promise 1");
  } else {
    reject("Not Completed promise 1");
  }
});

promise1
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

const promise2 = new Promise((resolve, reject) => {
  resolve("Completed promise 2");
});

//Print single promise
promise2.then((res) => console.log(res));
console.log("End");

//Print all promise together

Promise.all([promise1, promise2])
  .then(([res1, res2]) => {
    console.log(res1, res2);
  })
  .catch((err) => {
    console.log("Promise.all error:", err); // Handle errors if any promise fails
  });

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Completed promise 3");
  }, 2000);
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Completed promise 4");
  }, 1000);
});

Promise.race([promise3, promise4]).then((res) => {
  console.log(res);
});
