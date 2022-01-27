import React from "react";
import * as PropTypes from "prop-types";
// include your styles into the webpack bundle
import "../../styles/Button.css";

//create your first component
const Button = (props) => {
	const handleClick = (ev) => {
		props.handleClick(ev);
	};
	return (
		<>
			<button
				onClick={handleClick}
				type="button"
				class="btn btn-primary btn-circle selected"
				//<p className={`btn-circle ${this.state.isActiveClass && 'more-class-name'}`} >target element</p>
				id={props.color}
			/>
		</>
	);
};

Button.PropTypes = {
	handleClick: PropTypes.func,
	color: PropTypes.string,
};

export default Button;
