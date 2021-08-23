import styled from "styled-components"

const IconsAreaStyles = styled.div`
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    & > svg {
        color: var(--grey-three);
        transition: all 0.3s ease-in-out;


        &:hover {
            color: var(--grey-two)
        }

    }
`

export default IconsAreaStyles;