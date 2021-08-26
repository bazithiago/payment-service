import React from "react";
import styled from "styled-components";
import ClientFirstInfos from './ClientFirstInfos'
import ClientParentsInfos from './ClientParentsInfos'

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
        padding: 0 28px ;
    }
`

const ClientInfo = ({ clientInfosData }) => {
    return(
        <ClientInfoStyles>
            <ClientFirstInfos clientInfosData={clientInfosData}/>
            <ClientParentsInfos clientInfosData={clientInfosData}/>


        </ClientInfoStyles>
    );
}

export default ClientInfo;