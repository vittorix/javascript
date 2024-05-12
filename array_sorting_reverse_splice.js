import { p } from "./node_modules/vittorix-utils/vittorix-utils.js";

// see array_methods.js too
p("\n================== ARRAY SORTING =================");

p("-------------- SORT() --------------");
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

// sort() changes the original array.
const arr1 = ["b", "2", "1", "10", "a"];
const arrModified = arr1.sort();
p("sorted10 sort(): " + arrModified);
p("sorted11 original array: " + arr1);

p("-------------- TOSORTED() --------------");
// toSorted() doesn't modify the original array
const arr2 = ["b", "2", "1", "10", "a"];
const arrToSorted = arr2.toSorted();
p("toSorted(): " + arrToSorted);
p("original array: " + arr2);

p("-------------- REVERSE() --------------");
// reverse() modifies the original array
const arr3 = ["1", "2", "3", "4", "5", "6"];
const arrReversed = arr3.reverse();
p("reversed(): " + arrReversed);
p("original array: " + arr3);

p("-------------- TOREVERSED() --------------");
// toReversed() does not modify the original array
const arr4 = ["1", "2", "3", "4", "5", "6"];
const arrToReversed = arr4.toReversed();
p("reversed(): " + arrToReversed);
p("original array: " + arr4);

p("-------------- SPLICE() --------------");
// splice(1, 3)removes 3 elements starting with index 1. It modifies the original array
const arr5 = ["1", "2", "3", "4", "5", "6"];
const arrSpliced = arr5.splice(1, 3);
p("splice(1, 3): " + arrSpliced);
p("original array: " + arr5);

p("-------------- TOSPLICED() --------------");
// toSpliced() does not modify the original array
const arr6 = ["1", "2", "3", "4", "5", "6"];
const arrToSpliced1 = arr6.toSpliced(1, 3);
p("toSpliced(1, 3): " + arrToSpliced1);
p("original array: " + arr6);

// toSpliced(1, 3, "999") removes 3 elements starting with index 1 and substitutes them with "999"
const arr7 = ["1", "2", "3", "4", "5", "6"];
const arrToSpliced2 = arr7.toSpliced(1, 3, "999");
p("toSpliced(1, 3, '999'): " + arrToSpliced2);
p("original array: " + arr7);

export default "";
