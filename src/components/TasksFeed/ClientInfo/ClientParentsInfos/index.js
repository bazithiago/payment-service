import React from "react";
import styled from "styled-components";
import * as Icon from 'react-feather'
import uniqid from 'uniqid';
import initials from '../Functions/initialsFunction'
import Button from '../../../_Buttons'
import Separator from '../../../_Separator'

const ClientParentsInfosStyles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    
    & > :nth-child(1){    //parents tag
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
            margin: 10px 0 0 15px;
            flex: 1;
            border: 0;
            height: 0;
            border-top: 1px solid var(--background);
        }
    }

    & > :nth-child(2){       // name, email, phone
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;

        & > div > :nth-child(1) {    // avatar name
            display: flex;
            align-items: center;
            margin-bottom: 15px;

            div {
                width: 38px;
                height: 38px;
                border-radius: 50%;
                background-color: var(--background);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.8rem;
                font-weight: 800;
                color: var(--grey-three)
            }

            span {
                color: var(--grey-one);
                font-size: 0.85rem;
                font-weight: 800;
                margin-left: 20px;
            }
        }

        & > div > :nth-child(2) {   //tables div
            margin-bottom: 30px;

            tbody > tr {
                height: 25px;
            }

            tbody > tr > :first-child { // first column
                font-size: 0.8rem;
                color: var(--grey-three);
                font-weight: 700;
                text-align: right;
                padding-right: 20px;
            }

            tbody > tr > :last-child { // first column
                font-size: 0.8rem;
                color: var(--blue-one);
                font-weight: 700;
                text-align: left;
            }
        }
    }

`

const ParentAvatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
`

const ParentAvatarEmpty = styled.div`

`

const ButtonMessage = styled(Button)`
    background-color: var(--blue-one);
    border: 0;
    color: var(--white);
    font-size: 0.8rem;
    font-weight: 700;
    min-height: 40px;
    display: flex;
    align-items: center;
    padding: 8px 24px;

    :hover {
        background-color: var(--blue-two);
    }

    svg {
        color: rgb(118, 166, 247);
        width: 14px;
        stroke-width: 2px;
        margin-right: 15px;
    }
`


const ClientParentsInfos = ({ clientInfosData }) => {
    return (
        <ClientParentsInfosStyles>
            <Separator>Parents</Separator>
            <div>
                {clientInfosData.parents.map((parent) => {
                    return(
                        <div key={uniqid()}>
                            <div>
                                {parent.photo 
                                    ? <ParentAvatar alt={parent.name} src={parent.photo} /> 
                                    : <ParentAvatarEmpty>{initials(parent.name)}</ParentAvatarEmpty> 
                                }
                                <span>{parent.name}</span>
                            </div>
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Email</td>
                                            <td>{parent.email}</td>
                                        </tr>
                                        <tr>
                                            <td>Phone</td>
                                            <td>{parent.phone}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                     )
                })}
            </div>
            <ButtonMessage>
                <Icon.Mail />
                Message Parent
            </ButtonMessage>            
            
            
        
        </ClientParentsInfosStyles>






    );
}

export default ClientParentsInfos;