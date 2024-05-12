import { p, pa } from "./node_modules/vittorix-utils/vittorix-utils.js";
import * as vu from "./node_modules/vittorix-utils/vittorix-utils.js";

p("\n================== ARRAY METHODS NEW =================");

const products = [
  "products on sale",
  {},
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 700 },
  { name: "Tablet", price: 450 }
];
pa(products, "Products");

p("---------------------------------------");
p("WITH: changes elements of the array");

// first element changes
const products1 = products.with(0, "electronics on sale");
pa(products1, "Products1");

// first element changes, but then changing the second reverts the first change beacuse we are making againg a copy from products
let products2 = products.with(0, "electronics on sale");
pa(products2, "Products2");
products2 = products.with(1, { name: "Keyboard", price: 123 });
pa(products2, "Products2");

// this is because we had to make a copy of product2 instead, in fact, this gives both changes:
products2 = products2.with(0, "electronics on sale");
pa(products2, "Products2");

// changing only price of Laptop
const products3 = products.with(2, { name: products[2].name, price: 456 });
pa(products3, "Products3");

p("---------------------------------------");
p("STRUCTURED CLONE: makes a deep copy of an object.");

// structuredClone() makes a deep copy of the array. when we reverse the copy, the original array does not change (as it would if we used spreading or shallow copy of the array)
const array = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 700 },
  { name: "Tablet", price: 450 }
];

const arrayClonedEuro = structuredClone(array);
const productsEuro1 = arrayClonedEuro.map((product) => ({
  name: product.name,
  price: "\u20AC" + (product.price *= 0.9)
}));
pa(productsEuro1, "array cloned and in euro");
pa(array, "original array");

// notice that the original gets modified in price too
const productsEuro2 = [...array].map((product) => ({
  name: product.name,
  price: "\u20AC" + (product.price *= 0.9)
}));
pa(productsEuro2, "array spreaded and in euro");
pa(array, "original array");

export default "";
