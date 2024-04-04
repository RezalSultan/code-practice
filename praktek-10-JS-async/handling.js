// try catch
try {
	let num = 5;
	console.log(num);
} catch (error) {
	console.log(error);
	throw new Error("Ini error");
}

fetch("https://jsonplaceholder.typicode.com/todos/1")
	.then((response) => response.json())
	.then((json) => console.log(json));

const fetchData = async () => {
	let posts;
	try {
		const response = await fetch(
			"https://jsonplaceholder.typicode.com/posts"
		);
		console.log(response);
		if (response.status === 404) {
			throw new Error(response.status);
		}
		posts = await response.json();
		posts = posts.slice(0, 10);
		console.log(posts);
	} catch (error) {
		console.log(error);
	} finally {
		const postList = document.getElementById("data");
		posts.forEach((post) => {
			const wrap = document.createElement("div");
			const title = document.createElement("h2");
			const body = document.createElement("p");

			wrap.style.border = "1px solid black";
			wrap.style.width = "300px";
			wrap.style.padding = "16px";
			wrap.style.borderRadius = "16px";
			title.textContent = post.title;
			body.textContent = post.body;

			wrap.appendChild(title);
			wrap.appendChild(body);
			postList.appendChild(wrap);
		});
	}
};

fetchData();
