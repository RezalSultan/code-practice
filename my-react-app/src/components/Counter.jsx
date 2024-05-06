import React, { useEffect, useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);
	const [data, setData] = useState();
	console.log(data);
	const numbers = [1, 2, 3, 4, 5];

	useEffect(() => {
		const dummyData = [
			{ id: 1, name: "Item Default" },
			{ id: 2, name: "Item Even" },
			{ id: 3, name: "Item Odd" },
		];

		// if (count === 0) {
		// 	setData(dummyData[0]);
		// } else if (count % 2 === 0) {
		// 	setData(dummyData[1]);
		// } else {
		// 	setData(dummyData[2]);
		// }
		count === 0
			? setData(dummyData[0])
			: count % 2 === 0
			? setData(dummyData[1])
			: setData(dummyData[2]);
	}, [count]);

	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => setCount(count + 1)}>Click me</button>
			<div className="data">
				<h2>Dummy Data</h2>
				{data ? (
					<p>
						{data.id} - {data?.name}
					</p>
				) : (
					<p>Loading...</p>
				)}

				{/* {data.map((item, index) => (
					<p key={index}>
						{item.id} - {item.name}
					</p>
				))} */}
			</div>
			<div className="numbers-list">
				<h2>List Numbers</h2>
				<ul>
					{numbers.map((number, index) => (
						<li key={index}>{number}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Counter;
