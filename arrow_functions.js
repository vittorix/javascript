import { p } from "./node_modules/vittorix-utils/vittorix-utils.js";
// https://www.youtube.com/watch?v=h33Srr5J9nY&list=PLZlA0Gpn_vH9k5ju1yq9qCDqvtuTVgTr6&index=6

p("\n============= ARROW FUNCTIONS ============");

let isPositive = (n) => n > 0;
p("7 is positive: " + isPositive(7));

let sum = (a, b) => a + b;
p("sum: " + sum(2, 3));

let random = Math.random;
p("random number: " + random());

document.addEventListener("click", () => alert("clicked"));

// prettier-ignore
// functions override "this" keyword, arrow functions don't!
class Person {
  constructor(name) { this.name = name; }
  
  printNameFunction() {
    setTimeout(function () { 
        p('functions redefine "this" so the following name is gonna be empty: <' + this.name + ">"); 
    }, 100);
  }
  
  printNameArrow() {
    setTimeout(() => {
        p('arrow functions don\'t redefine "this" so the following name is gonna show: ' + "<" + this.name + ">"); 
    }, 100);
  }
}

let person = new Person("vitto");
person.printNameFunction();
person.printNameArrow();

export default "";
