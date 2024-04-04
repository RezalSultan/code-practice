// callback
const myFirst = () => {
	myDisplayer("Hello");
};

function myDisplayer(text) {
	console.log(text);
}

function mySecond() {
	myDisplayer("Goodbye");
}

myFirst();
mySecond();

// setTimeout
console.log("Print First!");
setTimeout(() => {
	console.log("Print this after 3 sec");
}, 3000);
console.log("Print Second!");

// setInterval
const setTime = () => {
	console.log(new Date());
	const time = document.getElementById("time");
	time.textContent = new Date().toLocaleString();
};

const intervalTime = setInterval(setTime, 1000);

setTimeout(() => {
	clearInterval(intervalTime);
	console.log("interval stop");
	console.log("program finish");
}, 5000);
