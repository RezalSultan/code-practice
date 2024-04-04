function lebaranMauKemana(tempat, tgl) {
	console.log(arguments);
	console.log(arguments[0]);
	console.log(arguments[1]);
}

lebaranMauKemana("jakarta", "15 April 2024", "dari function biasa");

const mudikLebaran = (tempat, tgl) => {
	console.log(arguments);
	// console.log(arguments[0])
	// console.log(arguments[1])
};

mudikLebaran("bandung", "20 April 2024");
