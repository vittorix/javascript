import {
  p,
  parse,
  stringy
} from "./node_modules/vittorix-utils/vittorix-utils.js";

p("\n============= OBJECT SPREADING/DESTRUCTURING ============");

let person1 = {
  name: "John Doe",
  age: 30,
  address: {
    city: "New York",
    state: "NY",
    zip: "10001"
  }
};

let person2 = {
  name: "Jane Smith",
  age: 28,
  address: {
    city: "Los Angeles",
    state: "CA",
    zip: "90001"
  }
};

let person3 = {
  name: "Alice Johnson",
  age: 35,
  address: {
    city: "Chicago",
    state: "IL",
    zip: "60601"
  }
};

let vitto1 = {
  name: "Vitto",
  height: 72
};

let vitto2 = {
  address: {
    city: "New york",
    state: "FL",
    zip: "12345"
  }
};

p([person1, person2, person3]);
p({ person1, person2, person3 });

const { name: fullName, age, address } = person1;
p("full name: " + fullName + " - city: " + address.city);

const {
  name,
  address: { city }
} = person2;
p(name + " " + city);
p(name + " " + address.city + " " + address.state + " " + address.zip);

let personVitto = { ...vitto1, ...vitto2 };
p(stringy(personVitto));

p(parse('{"name":"vitto", "height":72}'));

let vitto3 = {
  address: {
    fullAddress: "Los Angeles, California 12345"
  },
  job: "software dev"
};
personVitto = { ...vitto1, ...vitto3 };
p(personVitto);
p(stringy(personVitto)); // vitto3 overrides the whole property address and adds the job property

// without destructuring:
function printUser(user) {
  console.log(`name: ${user.name}. height: ${user.height}`);
}
printUser(personVitto);

// with destructuring:
function printUserDestr({ name, height, food = "fish" }) {
  console.log(`name: ${name}. height: ${height}. food: ${food}`);
}
printUserDestr(personVitto);

export default "";
