import React from "react";
import styled from "styled-components";

const SeparatorStyles = styled.div`
    display: flex;
    align-content: center;
    width: 100%;
    margin-bottom: 30px;

        span {
            font-size: 0.9rem;
            font-weight: 700;
            color: var(--grey-three)
        }
        
        hr {
            margin: ${props => props.margins ? props.margins : '10px 0 0 15px'};
            flex: 1;
            border: 0;
            height: 0;
            border-top: 1px solid ${props => props.hrColor ? props.hrColor : 'var(--background)'};
        }
`

const Separator = ({ children, hrColor, margins }) => {
    return(
        <SeparatorStyles hrColor={hrColor} margins={margins}>
            <span>{children}</span>
            <hr />
        </SeparatorStyles>
    )
}

export default Separator;