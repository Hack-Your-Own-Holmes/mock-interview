import styled from "styled-components";

export const Welcome = styled.div`
	width: 100vw;
	height: 100vh;
	background-image: url(https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80);
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

	h1 {
		font-size: ${(props) => props.theme.font.huge};
		color: ${(props) => props.theme.colors.light};
	}

	p {
		width: 40%;
		font-size: ${(props) => props.theme.font["size-md"]};
		color: ${(props) => props.theme.colors.white};
		text-align: center;
	}
`;
