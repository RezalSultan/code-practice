import React from "react";

const Profile = (props) => {
	console.log(props);
	return (
		<div>
			<h2>{props.name}</h2>
			<p>{props.domisili}</p>
			<p>{props.noHp}</p>
		</div>
	);
};

export default Profile;
