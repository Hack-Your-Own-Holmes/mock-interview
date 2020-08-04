import styled from "styled-components";

export default styled.div`
    position: fixed;
    top: ${(props=> props.IsTitleOpen ? `${40/16}rem` : `-${100/16}rem`)};
    left: 50%;
    transform: translateX(-50%);
    width: 80vw;
    padding: ${10/16}rem 0;
    text-align: center;
    border-radius: ${10/16}rem;
    background-color: ${(props=> props.theme.colors.info)};
    color: ${(props=> props.theme.colors.light)};
    transition: all 1s ease-in-out;
`;
