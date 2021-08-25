import React from "react";
import styled from "styled-components";

const ClientInfoStyles = styled.div`
    display: none;

    @media screen and (min-width: 1024px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        width: 20vw;
        min-width: 300px;
        height: 100vh;
        background-color: var(--white);
        padding: 50px 0 0 0;
    }
`

const ClientInfo = () => {
    return(
        <ClientInfoStyles>
            Client Info
        </ClientInfoStyles>
    );
}

export default ClientInfo;