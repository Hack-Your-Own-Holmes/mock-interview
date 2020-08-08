import styled from "styled-components";

export default styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;

    video{
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
        z-index: -100;
        outline: none;
    }

    button{
        position: fixed;
        right: ${15/16}rem;
        bottom: ${20/16}rem;
    }
`;
