// type data sting
const car_name1 = "Rubicon";
const car_name = "Volco XC60";
console.log(car_name);
console.log(typeof car_name);

// type data boolean
const bool = false;
console.log(bool);
console.log(typeof bool);

// type data number
const x1 = 34.0;
let x2 = 35;
const billion = 1e9;
const result = x1 + x2;
console.log(result);
console.log(typeof x1);
console.log(billion);

// type data array
const arr = ["spider", "cat", "dog", 8, false];
console.log(arr);
console.log(arr[3]);
arr[3] = "cow";
console.log(arr);
console.log(arr.length);

// type data object
const person = {
	first_name: "Jhon",
	last_name: "Doe",
	age: 50,
	eye_color: "blue",
	hobbies: ["olahraga", "games"],
	address: {
		numbers: 15,
		jalan: "Adi Sucipto",
	},
};
console.log(person);
console.log(person.first_name);
console.log(person.hobbies[1]);
console.log(person.address.jalan);

// logical operator
const a = 10;
const b = 12;

// operator AND = &&
console.log(a < 15 && b > 10);
console.log(a < 15 && b > 15);
//  operator OR = ||
console.log(a < 15 || b > 10);
console.log(a < 15 || b > 15 || a > 11);
console.log(a < 9 || b > 15 || a > 11);
console.log(a >= b || a == 10);
// operator NOT = !
console.log(!(a > b));
console.log(!(a < 15 && b > 10));

// equality comparison
const x = 15;
const y = "15";
const z = 20;
console.log(x == y);
console.log(x === y);
console.log(x >= 15);
console.log(y < 15);
console.log(x != y);
console.log(x !== y);
