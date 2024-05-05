import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
	const { title } = useParams();
	const searchParams = new URLSearchParams(location.search);
	const category = searchParams.get("category");

	return (
		<div>
			<Navbar />
			<h2>Ini blog detail, {title}</h2>
			<p>dengan kategori = {category}</p>
		</div>
	);
};

export default BlogDetail;
