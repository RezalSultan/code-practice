let rating = 3;

// if
if (rating === 3) {
	console.log("YOU ARE SUPERSTAR!");
}

// if else
if (rating === 3) {
	console.log("YOU ARE SUPERSTAR!");
} else {
	console.log("Values ​​other than ratings");
}

// multiple if
if (rating === 3) {
	console.log("YOU ARE SUPERSTAR!");
} else if (rating === 2) {
	console.log("MEETS EXPECTATIONS");
} else if (rating === 1) {
	console.log("NEEDS IMPROVEMENT");
} else {
	console.log("Values ​​other than ratings");
}

// Swtitch Case
let day;
switch (new Date().getDay()) {
	case 0:
		day = "Sunday";
		break; // Untuk memberhentikan perintah berikutnya jika case yang pertama benar
	case 1:
		day = "Monday";
		break;
	case 2:
		day = "Tuesday";
		break;
	case 3:
		day = "Wednesday";
		break;
	case 4:
		day = "Thursday";
		break;
	case 5:
		day = "Friday";
		break;
	case 6:
		day = "Saturday";
		break;
	default:
		day = "day not found";
}
console.log(day);

const fruitType = "Bananas";
switch (fruitType) {
	case "Oranges":
		console.log("Oranges are $0.59 a pound.");
		break;
	case "Bananas":
		console.log("Bananas are $0.59 a pound.");
		break;
	case "Apples":
		console.log("Apples are $0.59 a pound.");
		break;
	default:
		console.log(`Sorry, we are out of ${fruitType}.`);
}
