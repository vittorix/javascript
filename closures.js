import { p, pa } from "./node_modules/vittorix-utils/vittorix-utils.js";
import * as vu from "./node_modules/vittorix-utils/vittorix-utils.js";

p("\n================== CLOSURES =================");

// in JS all the internal functions have access to the scope of their parents and the parents of their parents and so on. so inner will be able to access this file level message
const fileMessage = "file message";

// https://www.youtube.com/watch?v=3a0I8ICR1Vg&list=PLZlA0Gpn_vH9k5ju1yq9qCDqvtuTVgTr6&index=15
const outer = (outerMessage) => {
  const inner = (innerMessage) => {
    p("file: " + fileMessage);
    p("outer: " + outerMessage);
    p("inner: " + innerMessage);
  };
  return inner;
};

// after inner is created, the value of the outer message is saved in it
const inner = outer("outer message");
// so when inner is called, the inner function still remembers the outer message and prints it!
inner("inner message");

const outer1 = (url) => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      p("url: " + url);
      p(
        "received (first track name)" + vu.stringy(data.results[0]["trackName"])
      );
    })
    .catch((error) => console.log("Request failed:", error));
};
// notice that without the '.' at the end gives cors error
outer1("https://itunes.apple.com/search?term=jack+johnson.");

export default "";
