import React from 'react';
import styled from 'styled-components';


const ButtonStyles = styled.button`
    border-radius: 8px;
    width: 100%;
    font-style: normal;
    font-weight: bold;
    font-size: 0.8rem;
    text-align: center;
    text-transform: uppercase;
    padding: 12px 20px;
    background-color: var(--white);
    color: var(--grey-two);
    border: 2px solid var(--grey-two);

    :hover {
        background-color: var(--grey-two);;
        color: var(--white);
        transform: translateY(-2px);
        transition: all 0.2s;
    }

    ${(props)=>{
        if (props.status === "late") {
            return(`
            background-color: var(--red-alert);
            color: var(--white);
            border: 0;

            :hover {
                background-color: red;
            }
            `)
        }
        else if(props.status === "toDo") {
            return(`
            background-color: var(--yellow-attention);
            color: var(--white);
            border: 0;

            :hover {
                background-color: #FF8903;
            }
            `)
        }
        // else if(props.status === "okay") {
        //     return(`
        //     background-color: var(--primary);
        //     color: var(--white);
        //     border: 0;

        //     :hover {
        //         background-color: green;
        //     }
        //     `)
        // }
    }}

`;

const Button = ({children, status}) => {
    return(
        <ButtonStyles status={status}>
            {children}
        </ButtonStyles>
    );
};


export default Button;

