import { p, pa } from "./node_modules/vittorix-utils/vittorix-utils.js";

p("\n============= ARRAY SPREADING/DESTRUCTURING ===========");

const arr = ["a", "b", "c", "d", "e", "f", { name: "vitto" }, "3", "2", "1"];
pa(arr, "Array");

let [a, , , d, ...rest] = arr;
p(a + " " + d);
pa(rest, "Rest"); // rest: e,f,[object Object],3,2,1

let arr1 = [...arr];
pa(arr1, "arr1 with spreading");

arr1 = arr;
pa(arr1, "arr1 with assignment");

arr1 = [...arr, ...arr1]; //arr.concat(arr1)
pa(arr1, "arr1 arr2 concatenated");

function sumMult(m, n) {
  return [m + n, m * n];
}
const [sum, mult, division = "no division"] = sumMult(2, 3); //division is set to a default
p(sum);
p(mult);
p(division);

// add element at the beginning
const arr2 = ["added as first element", ...arr];
pa(arr2, "Arr2");

// adding elements at beginning and end
const arr3 = ["+++", , ...arr, "---", 12333];
pa(arr3, "Arr3");

export default "";
