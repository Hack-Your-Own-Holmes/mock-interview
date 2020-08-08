import styled from "styled-components";

export default styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;

    video {
        outline: none;
    }
    .buttons {
        width:auto;
        position: absolute;
        right: ${30/16}rem;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        button {
            margin-bottom: ${10/16}rem;
        }
    }
`;
