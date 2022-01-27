import React from "react";
import Lights from "../component/Lights.jsx";

//style Main
import "../../styles/Main.css";

//create your first component
const Main = () => {
	return (
		<>
			<div className="row justify-content-center Lights">
				<div className="LightContainer align-items-center">
					<Lights />
				</div>
			</div>
		</>
	);
};

export default Main;
