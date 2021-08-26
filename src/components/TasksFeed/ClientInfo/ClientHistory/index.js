import React from "react";
import styled from "styled-components";
import Separator from '../../../_Separator'
import { UserIcons } from '../ClientFirstInfos'
import * as Icon from 'react-feather'

const ClientHistoryStyles = styled.div`
    width: 100%;

    table > tr > td {
        display: flex;
        border-left: 1px solid var(--background);
        padding: 0 0 20px 0;
        margin: -2px 0 0 18px;

        & > div > div  {    // icon
            position: relative;
            left: -20px;
        }
        
        p {
            font-size: 0.8rem;
            font-weight: 700;
            color: var(--grey-two)
        }
        & > div > span {
            font-size: 0.7rem;
            color: var(--grey-three);
            font-weight: 700;
        }
    }

    table > :last-child > td {            
        border: 0;
    }

`

const ClientHistory = () => {
    return(
        <ClientHistoryStyles>
            <Separator>History</Separator>
            <table>
                <tr>
                    <td>
                        <div><UserIcons><Icon.UserPlus/></UserIcons></div>
                        <div>
                            <p>Added to <span style={{color: 'var(--blue-one'}}>Charlotte Hornets Academy</span> Team</p>
                            <span>22/02/2017</span>
                        </div>
                        
                    </td>
                </tr>
                <tr>
                    <td>
                        <div><UserIcons><Icon.CreditCard color='var(--primary)'/></UserIcons></div>
                        <div>
                            <p>Payment to Charlotte has been recorded</p>
                            <span>22/02/2017</span>
                        </div>
                        
                    </td>
                </tr>
                <tr>
                    <td>
                        <div><UserIcons><Icon.UserCheck/></UserIcons></div>
                        <div>
                            <p>Added to <span style={{color: 'var(--blue-one'}}>Charlotte Hornets Academy</span> Team</p>
                            <span>22/02/2017</span>
                        </div>
                        
                    </td>
                </tr>
            </table>
        </ClientHistoryStyles>
    )
}

export default ClientHistory;