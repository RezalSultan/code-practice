import axios from "axios";
import React, { useEffect, useState } from "react";

const DataList = () => {
	const [dataUser, setDataUser] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await axios.get(
					"https://jsonplaceholder.typicode.com/users"
				);
				console.log(data);
				setDataUser(data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<ul>
				{dataUser.map((data) => (
					<li key={data.id}>
						<strong>{data.name}</strong> - {data.email}
					</li>
				))}
			</ul>
		</>
	);
};

export default DataList;
