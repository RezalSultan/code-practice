import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Profile from "./components/Profile";

function MyButton() {
	return <button>my button</button>;
}

function Item({ isPacked, name }) {
	// if (isPacked) {
	// 	return <li>{name} Success</li>;
	// }
	// return <li>{name}</li>;

	return <li>{isPacked ? `${name} Success` : `${name}`}</li>;
}

function App() {
	return (
		<div>
			<h1>Test</h1>
			<Profile name="sultan" domisili="jakarta" noHp="083721621387" />
			<Profile name="thomi" domisili="Jawa Timur" noHp="0823472346238" />
			<MyButton />
			<ul>
				<Item isPacked={true} name="Space suit" />
				<Item isPacked={true} name="Helmet with a golden leaf" />
				<Item isPacked={false} name="Photo of Tam" />
			</ul>
		</div>
	);
}

export default App;
