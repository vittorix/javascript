import { p, pa } from "./node_modules/vittorix-utils/vittorix-utils.js";
import * as vu from "./node_modules/vittorix-utils/vittorix-utils.js";

p("\n================== TEMPLATE LITERALS =================");
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates

p("multiline\ntext");
p(`multiline\ntext`);
p(`multiline
text`);
p`multiline
text`;

const animal = "asino";
p(`io ho un ${animal} a casa`);

const amount = "1000";
p(`io ho \$${amount}`); // $ needs to be escaped to \$

p(`\\`); // prints \
p(`\\n`); // prints \n
p(`\n`); // prints a line break

const a = 5,
  b = 10;
console.log(`5 + 10 = ${a + b}`);

p("------- nested template literals ------");
const classes = p(
  `test ${false ? "condition1" : ` condition2 ${true ? "true" : "false"}`}`
);

p("------- tagged template literals ------");
// tagged template function that performs the string interpolation
function myTag(strings, person, ageExp) {
  const str0 = strings[0]; // "Mr "
  const str1 = strings[1]; // " is "
  const age = ageExp < 100 ? "of normal age" : "a centenarian";
  // return a string built using a template literal
  //      Mr.    Mike     is of  normal age
  return `${str0}${person}${str1}${age}`;
}

// Mr Mike is of normal age
let name = "Mike";
let age = 28;
p(myTag`Mr ${name} is ${age}`);
// Mr John is a centenarian
name = "John";
age = 102;
p(myTag`Mr ${name} is ${age}`);

p("---- tagged expressions ----");
// the tag does not have to be a plain identifier. You can use any expression

// prints an array of 1, [ 'Hello' ], because there it is the arguments passed to the console.log function
console.log`Hello`;

// bind makes a copy of the function console.log. the first argument of bind is 'this' and gets the 1. 2 and 3 are other arguments that get bound with the third argument ['Hello']
console.log.bind(1, 2, 3)`Hello`; // 2 3 [ 'Hello' ]

new Function("console.log(arguments)")`Hello`; // [Arguments] { '0': [ 'Hello' ] }

function recursive(strings, ...values) {
  console.log(strings, values);
  return recursive;
}
// [ 'Hello' ] []
// [ 'World' ] []
recursive(1)`Hello``World`;

p("---- raw string ----");
// prints line1\nline2
function tag(strings) {
  console.log(strings.raw[0]);
}
tag`line1\nline2`;

export default "";
