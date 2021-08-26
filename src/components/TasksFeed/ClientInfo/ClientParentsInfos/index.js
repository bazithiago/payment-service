import React from "react";
import styled from "styled-components";
import * as Icon from 'react-feather'
import initials from '../Functions/initialsFunction'
import Button from '../../../Buttons'

const ClientParentsInfosStyles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    & > :nth-child(1){    //parents tag
        display: flex;
        align-content: center;
        width: 100%;
        margin-bottom: 30px;
        background-color: bisque;

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

        & > :nth-child(1) {    // avatar name
            display: flex;
            align-items: center;
            margin-bottom: 15px;

            span {
                color: var(--grey-one);
                font-size: 0.85rem;
                font-weight: 800;
                margin-left: 20px;
            }
        }

        & > :nth-child(2) {   //tables div
            margin-bottom: 30px;

            table > tr {
                height: 25px;
            }

            table > tr > :first-child { // first column
                font-size: 0.8rem;
                color: var(--grey-three);
                font-weight: 700;
                text-align: right;
                padding-right: 15px;
            }

            table > tr > :last-child { // first column
                font-size: 0.8rem;
                color: var(--blue-one);
                font-weight: 700;
                text-align: right;
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
`


const ClientParentsInfos = ({ clientInfosData }) => {
    return (
        <ClientParentsInfosStyles>
            <div>
                <span>Parents</span>
                <hr />
            </div>
            <div>
                {clientInfosData.parents.map((parent) => {
                    return(
                        <>
                            <div>
                                {parent.photo 
                                    ? <ParentAvatar alt={parent.name} src={parent.photo} /> 
                                    : <ParentAvatarEmpty>{initials(parent.name)}</ParentAvatarEmpty> 
                                }
                                <span>{parent.name}</span>
                            </div>
                            <div>
                                <table>
                                    <tr>
                                        <td>Email</td>
                                        <td>oioioioi@oi.com</td>
                                    </tr>
                                    <tr>
                                        <td>Phone</td>
                                        <td>oioioioi@oi.com</td>
                                    </tr>
                                </table>
                            </div>
                        </>
                     )
                })}
            </div>
            <ButtonMessage>
                Message Parent
            </ButtonMessage>            
            
            
        
        </ClientParentsInfosStyles>






    );
}

export default ClientParentsInfos;