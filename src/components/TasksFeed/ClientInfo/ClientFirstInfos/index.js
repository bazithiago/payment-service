import React from "react";
import styled from "styled-components";
import * as Icon from 'react-feather'
import initials from '../Functions/initialsFunction'

const ClientFirstInfosStyles = styled.div`
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

        div:nth-child(2) {  //icon edit circle
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

    & > :nth-child(4) {    // user icons
        display: flex;
        justify-content: center;
        width: 100%;

        div + div {
            margin-left: 10px;
        }
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

export const UserIcons = styled.div`
    background-color: var(--background);
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        color: rgb(57, 67, 128);
        width: 50%;
        height: auto;
    }
`

const ClientFirstInfos = ({ clientInfosData }) => {
    return(
        <ClientFirstInfosStyles>
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
                    {clientInfosData.users.map((user) => {
                        return(
                            <UserIcons>
                                <Icon.User/>
                            </UserIcons>);
                    })}
                </div>
        </ClientFirstInfosStyles>
    )
}

export default ClientFirstInfos;