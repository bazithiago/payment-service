import styled from 'styled-components';


const Button = styled.button`
    border-radius: 3px;
    font-weight: 700;
    font-size: 0.9rem;
    text-align: center;
    padding: 8px 30px;
    background-color: transparent;
    color: var(--grey-two);
    border: 2px solid var(--grey-three);

    &:hover {
        background-color: var(--grey-three);
        color: var(--white);
        transition: all 0.2s ease-in-out;
    }

    ${ props => props.primary
        && `
            background-color: var(--primary);
            color: var(--white);
            border: 2px solid var(--primary);


            :hover {
                background-color: var(--primary-hover);
                border: 2px solid var(--primary-hover);
                transform: all 0.2s;

            }
            `
    };


    ${ props => props.alert
            && `
                background-color: var(--red-alert);
                color: var(--white);
                border: 2px solid var(--red-alert);

                :hover {
                    background-color: red;
                    transform: all 0.2s;
                    border: 2px solid red;
                }
            `
    };


    ${({ status }) => {
        if (status === "late") {
            return(`
            background-color: var(--red-alert);
            color: var(--white);
            border: 0;

            :hover {
                background-color: red;
            }
            `)
        }
        else if(status === "toDo") {
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


`

// const Button = ({ variant, children, status }) => {
//     return(
//         <ButtonStyles status={status} variant={variant}>
//             {children}
//         </ButtonStyles>
//     );
// };


export default Button;

