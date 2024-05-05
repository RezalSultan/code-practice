import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Blog = () => {
	return (
		<div>
			<Navbar />
			<h1>ini Blog</h1>
			<ul>
				<li>
					<Link to="/blog/teknologi">teknologi</Link>
				</li>
				<li>
					<Link to="/blog/lingkungan">lingkungan</Link>
				</li>
				<li>
					<Link to="/blog/teknologi?category=koding">
						teknologi dengan query strings koding
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Blog;
