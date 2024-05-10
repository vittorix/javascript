import { p } from "./node_modules/vittorix-utils/vittorix-utils.js";

p("\n============= ARRAY SPREADING/DESTRUCTURING ===========");

const arr = ["a", "b", "c", "d", "e", "f", { name: "vitto" }, "3", "2", "1"];
p("arr: " + arr);

let [a, , , d, ...rest] = arr;
p(a + " " + d);
p("rest: " + rest); // rest: e,f,[object Object],3,2,1

let arr1 = [...arr];
p("arr1 with spreading: " + arr1);

arr1 = arr;
p("arr1 with arrignment: " + arr1);

arr1 = [...arr, ...arr1]; //arr.concat(arr1)
p("arr1 arr2 concatenated: " + arr1);

function sumMult(m, n) {
  return [m + n, m * n];
}
const [sum, mult, division = "no division"] = sumMult(2, 3); //division is set to a default
p(sum);
p(mult);
p(division);

export default "";
