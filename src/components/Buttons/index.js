import styled from 'styled-components';


const Button = styled.button`
    border-radius: 4px;
    font-weight: 700;
    font-size: 0.9rem;
    text-align: center;
    padding: 13px 30px;
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
            border: 0;

            :hover {
                background-color: var(--primary-hover);
                transform: all 0.2s;
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

