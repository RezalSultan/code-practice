import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<ul className="h-10 bg-slate-300 flex gap-2 justify-center items-center">
			<li>
				<Link to="/" className="hover:text-blue-500">
					home
				</Link>
			</li>
			<li>
				<Link to="/blog" className="hover:text-blue-500">
					blog
				</Link>
			</li>
		</ul>
	);
};

export default Navbar;
