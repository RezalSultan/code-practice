// for
for (let i = 0; i < 5; i++) {
	console.log("The number is " + i + "<br>");
}

// not run this code, infinite loop
// for (let i = 20; i >= 5; i++) {
// 	console.log("The number is " + i + "<br>");
// }

const animals = ["lion", "tiger", "bear"];
for (let i = 0; i < animals.length; i++) {
	console.log(i, animals[i]);
}

// nested loops
let str = "LOL";
for (let i = 0; i <= 4; i++) {
	console.log("Outer : ", i);
	for (let j = 0; j < str.length; j++) {
		console.log("  Inner : ", str[j]);
	}
}

//  for in
const person = { fname: "John", lname: "Doe", age: 25 };

for (let x in person) {
	console.log(person[x]);
}

// for of
const cars = ["BMW", "Volvo", "Mini"];

for (let x of cars) {
	console.log(x);
}

// while
let i = 0;
while (i < 10) {
	console.log("The number is " + i);
	i++;
}

// do while
let num = 10;
do {
	console.log("The number is " + num);
	num++;
} while (num < 20);
