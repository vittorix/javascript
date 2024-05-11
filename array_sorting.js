import { p } from "./node_modules/vittorix-utils/vittorix-utils.js";

// see array_methods.js too
p("\n================== ARRAY SORTING =================");

let arr0 = [1, 2, 0, -4, 10, 30, 3];
p("arr0: " + arr0);

// if we don't pass sorting function, elements are sorted by converting them to strings
p("sorted1 (string): " + arr0.sort()); // -4,0,1,10,2,3,30

const compare = (a, b) => a - b; // is a shortcut notation for: function (a, b) {return a - b;})
// the specification a - b returns:
//   a negative number if a is smaller than b – so a will be sorted to the left of b
//   zero if they are equal – so it doesn’t matter which one comes first
//   a positive number if a is bigger than b – so a will be sorted to the right of b
p("function compare: " + compare);
p(compare(1, 2)); // prints -1
p(compare(1, 1)); // prints 0
p(compare(2, 1)); // prints 1

// sorts the array correctly
p("sorted2: " + arr0.sort(compare));
p("sorted3: " + arr0.sort((a, b) => a - b));

//inverts the array correctly
p("inverted1: " + arr0.sort((a, b) => b - a));
const invert = (a, b) => b - a;
p("inverted2: " + arr0.sort(invert));
p("inverted3: " + [23, -2, 8, 0, 11, 2, 22, 1].sort((a, b) => b - a)); // 23,22,11,8,2,1,0,-2

// these sorts only the numbers!!?? they print: b,1,2,10,a
p("sorted5: " + ["b", 2, 1, 10, "a"].sort(compare));
p("sorted6: " + ["b", "2", "1", "10", "a"].sort(compare));
p("sorted7: " + ["b", "2", "1", "10", "a"].sort((a, b) => a - b));
p(
  "sorted8: " +
    ["b", "2", "1", "10", "a"].sort(function (a, b) {
      return a - b;
    })
);
// this sorts inverted only the numbers!!?? it prints: b,10,2,1,a
p("sorted9: " + ["b", "2", "1", "10", "a"].sort((a, b) => b - a));

export default "";
