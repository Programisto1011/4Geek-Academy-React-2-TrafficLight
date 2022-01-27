import React from "react";
import Button from "../component/Button.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//style Main
import "../../styles/Main.css";

//create your first component
const Home = () => {
	return (
		<>
			<div class="LightContainer align-items-center">
				<Button color="red" />
				<Button color="orange" />
				<Button color="green" />
			</div>
		</>
	);
};

export default Home;
