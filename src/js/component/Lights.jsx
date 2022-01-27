import React, { useState } from "react";
// include your styles into the webpack bundle
import "../../styles/Lights.css";

//create your first component
const Lights = () => {
	const [selectedColor, setSelectedColor] = useState("");
	return (
		<>
			{/* Red light */}
			<button
				onClick={() => setSelectedColor("red")}
				type="button"
				id="red"
				className={`btn btn-circle ${
					selectedColor === "red" ? "selected" : ""
				}`}
			/>
			{/* Orange light */}
			<button
				onClick={() => setSelectedColor("orange")}
				type="button"
				id="orange"
				className={`btn btn-circle ${
					selectedColor === "orange" ? "selected" : ""
				}`}
			/>
			{/* Green light */}
			<button
				onClick={() => setSelectedColor("green")}
				type="button"
				id="green"
				className={`btn btn-circle ${
					selectedColor === "green" ? "selected" : ""
				}`}
			/>
		</>
	);
};

export default Lights;
