// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import Profile from "./components/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// function MyButton() {
// 	return <button>my button</button>;
// }

// function Item({ isPacked, name }) {
// 	// if (isPacked) {
// 	// 	return <li>{name} Success</li>;
// 	// }
// 	// return <li>{name}</li>;

// 	return <li>{isPacked ? `${name} Success` : `${name}`}</li>;
// }

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
