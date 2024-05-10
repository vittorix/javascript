import { p, stringy } from "./node_modules/vittorix-utils/vittorix-utils.js";

p("\n============= PROMISES ============");

let prom = new Promise((resolve, reject) => {
  if (true) resolve("success");
  else reject("fail");
});
prom
  .then((result) => {
    p(result);
  })
  .catch((result) => {
    p(result);
  });

// prettier-ignore
// output of this block:
// 1: condition is true
// 5: condition is true <==== notice that is printed before 4!
// 4: condition is false
// 6: condition is true
// 8: condition is false
{
function checkIt(condition) { 
    return new Promise((resolve, reject) => {
        if (condition) { resolve('condition is true'); } 
        else { reject("condition is false"); }
    });
}

const promiseOk = checkIt(true);
promiseOk
  .then((result) => { p("1: " + result); }) // gets executed
  .catch((e) => { p("2: " + e); });

const promiseFail = checkIt(false);
promiseFail
  .then((result) => { p("3: " + result); })
  .catch((e) => { p("4: " + e); });

promiseOk
  .then((result) => {
    p("5: " + result);
    return promiseOk;
  })
  .then((result) => {
    p("6: " + result);
    return promiseFail;
  })
  .then((result) => {
    p("7: " + result);
    return true;
  })
  .catch((e) => {
    p("8: " + e);
  });
}

const action1 = new Promise((resolve, reject) => {
  resolve("resolved action 1");
});
const action2 = new Promise((resolve, reject) => {
  resolve("resolved action 2");
});

// after it resolves all, it prints the array of messages
Promise.all([action1, action2])
  .then((messages) => {
    p("ALL: " + stringy(messages));
  })
  .catch((e) => {
    p("ALL: " + e);
  });

const action3 = new Promise((resolve, reject) => {
  reject("rejected action 3");
});
const action4 = new Promise((resolve, reject) => {
  resolve("resolved action 4");
});

// after it rejects one, it stops executing and shows the error
Promise.all([action1, action2, action3, action4])
  .then((messages) => {
    p("ALL resolved: " + messages);
  })
  .catch((e) => {
    p("ALL error: " + e);
  });

// after it resolves one, it stops executing
Promise.race([action1, action2, action3, action4])
  .then((message) => {
    p("RACE: " + message);
  })
  .catch((e) => {
    p("RACE: " + e);
  });

// waits for all promises to resolve and shows messages. doesn't need catch
Promise.allSettled([action1, action2, action3, action4]).then((messages) => {
  p("ALL_SETTLED: " + stringy(messages));
});

// waits for any promise to resolve and shows message. if all fail shows "AggregateError: All promises were rejected"
Promise.any([action3, action4])
  .then((message) => {
    p("ANY: " + message);
  })
  .catch((e) => {
    p("ANY error: " + e);
  });

export default "";
