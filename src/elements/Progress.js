import styled from "styled-components";

export default styled.ul`
    margin-top: ${10/16}rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    li {
        list-style: none;
        width: 100%;
        position:relative;
        text-align: center;
        display: flex;
        justify-content: center;

        div{
            border: none;
            width: ${25/16}rem;
            display: block;
            height: ${25/16}rem;
            border-radius: 50%;
            line-height: ${25/16}rem;
            background-color: ${(props)=> props.theme.colors.secondary};
            position:relative;
            

            &:hover {
                span {
                    visibility: visible;
                }
            }

            span {
                position: absolute;
                background-color: ${(props)=> props.theme.colors.dark};
                visibility: hidden;
                color: white;
                text-align: center;
                width: ${150/16}rem;
                z-index:1;
                top: ${20/16}rem;
                border-radius: ${10/16}rem;
            }
        }

        &.done {
            & + li::before {
                background-color: ${(props) => props.theme.colors.success};
            }
            div {
                background-color: ${(props) => props.theme.colors.success};
            }

        }        

        &::before {
            content: "";
            width: 100%;
            height: 3px;
            background-color: ${(props)=> props.theme.colors.secondary};
            color: ${(props)=> props.theme.colors.secondary};
            position: absolute;
            right: 50%;
            top: 50%;
            z-index: -10;
            transform: translateY(-50%);
        }
        &:first-of-type::before {
            content: none;
        }
    }

`;
