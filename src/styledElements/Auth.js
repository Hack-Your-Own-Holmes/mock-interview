import styled from "styled-components";

export default styled.div`
    width: 100vw;
    height: 100vh;

    .switch {
        width: 50%;
        display: flex;
        justify-content: space-evenly;
        margin: ${(props)=> props.theme.font["size-md"]} auto;

        button {
            border: none;
            outline: none;
            background-color: ${(props)=> props.theme.colors.white};
            font-size: ${(props)=> props.theme.font["size-md"]};
            cursor: pointer;
        }
    }

    form{
        display: flex;
        flex-wrap: wrap;
        width: 40%;
        margin-left: auto;
        margin-right: auto;

        h1 {
            text-align: center;
            width: 100%;
        }

        .form-group{
            position: relative;
            padding: ${8/16}rem;
            flex-grow: 0;
            max-width: 100%;
            flex-basis: 100%;

            &.top{
                max-width: 50%;
                flex-basis: 50%;
            }

            label{
                font-size: ${(props)=> props.theme.font["size-sm"]};
                position: absolute;
                top: 50%;
                left: ${20/16}rem;
                background-color: white;
                padding: ${2/16}rem;
                transform: translateY(-50%);
                transition: all 0.3s ease-in-out;

            }
            input{
                width: 100%;
                height: 4rem;
                padding: 0.8rem;
                font-size: ${(props)=> props.theme.font["size-sm"]};
                border-radius: ${10/16}rem;
                border: 0.2px solid black;

                &#firstname,&#lastname {
                    text-transform: capitalize;
                }
                
                &:focus,&:active,&:valid{
                    border: 0.2px solid black;
                    border-radius: ${10/16}rem;
                    outline: none;

                    +label{
                        top: ${8/16}rem;
                    }
                }
            }
        }
    }
    button{
        display:block;
        width: 100%;
        margin: ${8/16}rem;
    }

`;
