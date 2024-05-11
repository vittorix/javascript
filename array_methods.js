import { p, pa } from "./node_modules/vittorix-utils/vittorix-utils.js";
import * as vu from "./node_modules/vittorix-utils/vittorix-utils.js";

p("\n================== ARRAY METHODS =================");

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 700 },
  { name: "Tablet", price: 450 },
  { name: "Headphones", price: 150 },
  { name: "Smartwatch", price: 300 }
];

p("FOREACH - executes a function on each item in an array.");
products.forEach((product) => {
  p(`${product.name}: $${product.price}`);
});

// also see the use of reduce below to get the sum
let sum = 0;
products.forEach((product) => {
  sum += product.price;
});
p("sum of prices: $" + sum);
p("-------------------------------------------");

p("MAP - creates a new array transforming every element.");
let productNames = products.map((product) => product.name);
p(productNames);

// THIS MODIFIES THE ARRAY!!! that's why I created makeArr
// let productsEuro = products.map((product) => ({
//   name: product.name,
//   price: "\u20AC" + (product.price *= 0.9)
// }));
let productsEuro = vu.makeArr(products).map((product) => ({
  name: product.name,
  price: "\u20AC" + (product.price *= 0.9)
}));
pa(productsEuro, "Products in Euro");

let allNames = products.map((product) => product.name).join(", ");
p("All Names: " + allNames);
p("-------------------------------------------");

p("FILTER - creates a new array with elements passing a test.");
let expensiveProducts = products.filter((product) => product.price > 300);
pa(expensiveProducts, "Products costing more than 300$");
p("-------------------------------------------");

p("FIND - returns first element satisfying a test, or undefined.");
let foundProduct = products.find((product) => product.name === "Smartwatch");
p("Smartwatch: " + vu.stringy(foundProduct));
let firstExpensive = products.find((product) => product.price > 300);
p("First expensive: " + vu.stringy(firstExpensive));
p("-------------------------------------------");

p("INCLUDES - check if the array has a value.");
let mixedArray = [1, 3, "", "0", undefined, null, "vitto", 7];
let includesValue = mixedArray.includes("vitto");
pa(mixedArray, "Mixed array");
p("Mixed array includes 'vitto': " + includesValue);
p("-------------------------------------------");

p("REDUCE - uses a reducer on each element and gives a single output value.");
let sumPrices = products.reduce((total, product) => total + product.price, 0); // notice the initialization of total to 0
p(`sum of prices: $${sumPrices}`);

// the first prev is undefined so we need to exclude it, otherwise
// (prev, curr) => prev + ", " + curr.name, ' '
// would put a comma in front of the string: ", Laptop, Smartphone, ..."
// see also above, where this allNames is done better using map and join
let allNames1 = products.reduce(
  (prev, curr) => (prev.name ? prev.name : prev) + ", " + curr.name
);
p("All Names: " + allNames1);
p("-------------------------------------------");

p("SOME - checks if at least one element passes a test.");
let hasAffordableProduct = products.some((product) => product.price < 100);
p(`Has affordable product: ${hasAffordableProduct}`);

let hasLaptop = products.some((product) => product.name === "Laptop");
p("Has laptop: " + hasLaptop);
p("-------------------------------------------");

p("EVERY - checks if all elements pass a test.");
let allExpensive = products.every((product) => product.price > 200);
p(`All products are expensive: ${allExpensive}`);

let hasAllPrices = products.every((product) => product.price > 0);
p("Has all prices: " + hasAllPrices);
p("-------------------------------------------");

// see array_sorting.js too
p("SORT - sorts the array and returns it (changing the original array).");
let sortedByPrice = vu.makeArr(products).sort((a, b) => a.price - b.price);
pa(sortedByPrice, "Sorted by price");

let sortedByNameInvert = vu.makeArr(products).sort((a, b) => b.price - a.price);
pa(sortedByNameInvert, "Sorted by name inverted");

// test that the original products array has not changed (that's why I made makeArr to make a copy)
vu.test(products[3].price === 150, "Price is: " + products[3].price);

export default "";
