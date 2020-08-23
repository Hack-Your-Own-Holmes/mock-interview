import styled from "styled-components";

export const Welcome = styled.div`
	width: 100vw;
	height: 100vh;
	background-image: url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260);
	background-repeat: no-repeat;
	background-position: center;
	background-size: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

	h1 {
		font-size: ${(props) => props.theme.font.huge};
		color: ${(props) => props.theme.colors.dark};
	}

	p {
		width: 40%;
		font-size: ${(props) => props.theme.font["size-md"]};
		color: ${(props) => props.theme.colors.dark};
		text-align: center;
	}
`;
