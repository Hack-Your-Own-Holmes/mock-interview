import styled from "styled-components";

export default styled.button`
	width: ${150 / 16}rem;
	height: ${50 / 16}rem;

	color: ${(props) =>
        props.color === "dark" || props.color === "primary" ? "white" : "black"};
	background: ${(props) =>
        props.color ? props.theme.colors[props.color] : "transparent"};
	font-size: ${(props) => props.theme.font["size-sm"]};
	position: relative;
	border: none;
	border-radius: 10px;
	outline: none;
	cursor: pointer;
	overflow: hidden;
	transition: all 500ms ease-in-out;

	&:after {
		content: "";
		background: white;
		position: absolute;
		top: -50px;
		left: -100px;
		transform: rotate(35deg);
		width: 25px;
		height: 175px;
		opacity: 0.2;
		transition: all 500ms ease-in-out;
	}

	&:hover {
		transform: scale(1.09);
		&:after {
			left: 120%;
			transition: all 500ms ease-in-out;
		}
	}
`;
