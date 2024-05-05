import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import DataList from "../components/DataList";

const Home = () => {
	const { register, setValue, handleSubmit } = useForm();
	const [dataUser, setDataUser] = useState([]);
	const onSubmit = (data) => {
		console.log(data);
		setDataUser([...dataUser, data]);
		setValue("name", "");
		setValue("gender", "male");
	};

	return (
		<>
			<Navbar />
			<h1 className="text-5xl text-red-500">Ini Home</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h2>FORM</h2>
				<input placeholder="Name" {...register("name")} />
				<br />
				<select {...register("gender")}>
					<option value="female">female</option>
					<option value="male">male</option>
				</select>
				<br />
				<input type="submit" />
			</form>
			<ul>
				{dataUser.map((data, index) => (
					<React.Fragment key={index}>
						<li>{data.name}</li>
						<li>{data.gender}</li>
						<br />
					</React.Fragment>
				))}
			</ul>
			<DataList />
		</>
	);
};

export default Home;
