import React from "react";
import styled from "styled-components";
import * as Icon from 'react-feather'
import initials from './initialsFunction'

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

const ClientFirstInfos = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;

    & > :first-child {      //div avatar + icon
        display: flex;
        align-items: flex-end;
        padding-left: 38px;
        margin-bottom: 30px;
    }

    div > :nth-child(2) {   //icon edit circle
        background-color: var(--white);
        width: 38px;
        height: 38px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        right: 35px;
        top: 5px;
        cursor: pointer;
        box-shadow: 2px 2px 12px 1px rgb(0 0 0 / 5%);
        
        svg {
            width: 35%;
            height: 35%;
            color: var(--grey-two)
        }

        :hover {
            background-color: var(--background);
        }
    }

    p {
        color: var(--grey-one);
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 5px;
    }

    span {
        font-size: 0.9rem;
        color: var(--grey-two);
        font-weight: 600;
        margin-bottom: 20px;
    }
`

const ClientAvatar = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
`

const ClientEmptyAvatar = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: var(--blue-three);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--blue-two);
`

const ClientInfo = ({ clientInfosData }) => {
    return(
        <ClientInfoStyles>
            <ClientFirstInfos>
                <div>
                    {clientInfosData.photo 
                        ? <ClientAvatar alt={clientInfosData.name} src={clientInfosData.photo} /> 
                        : <ClientEmptyAvatar>{initials(clientInfosData.name)}</ClientEmptyAvatar> 
                    }
                    <div><Icon.Edit2 /></div>
                </div>
                <p>{clientInfosData.name}</p>
                <span>{`${clientInfosData.city}, ${clientInfosData.state}`}</span>
                <div>
                    icon icon
                </div>
            </ClientFirstInfos>


        </ClientInfoStyles>
    );
}

export default ClientInfo;