import React from "react";
import Lights from "../component/Lights.jsx";

//style Main
import "../../styles/Main.css";

//create your first component
const Main = () => {
	return (
		<>
			<div class="LightContainer align-items-center">
				<Lights />
			</div>
		</>
	);
};

export default Main;
