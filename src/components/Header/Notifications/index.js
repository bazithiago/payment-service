import React, { useState } from 'react'
import styled from 'styled-components'
import * as Icon from 'react-feather';
import IconsAreaStyles from '../IconsAreaStyles'
import NotificationList from './NotificationList'

const NotificationsStyles = styled.div`
    display: flex;
    position: relative;
`

const NotificationsArea = styled(IconsAreaStyles)`
    border-right: 2px solid var(--background);
    border-left: 2px solid var(--background);
    display: none;

    & > svg {
        margin-left: 8px;
    }

    & > div > span {
        display: none;
    }
    
    @media screen and (min-width: 1024px) {
        display: flex;
        
        &:hover {
            & > svg {
                transform: scale(0);
                transition: all 0.3s ease-in-out;
            }
            & > div {
                width: 30px;
                height: 30px;
                transition: all 0.3s ease-in-out;
                top: 0;
                left: -17px;
                display: flex;            
                align-items: center;
                justify-content: center;
            }

            & > div > span {
                display: flex;
                color: var(--white);
                font-size: 0.9rem;
                font-weight: 700;
            }

        }

    }
`

const BadgeNotification = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--red-alert);
    position: relative;
    top: -10px;
    left: -11px;
    transition: all 0.3s ease-in-out;

`

const EmptyNotificationsArea = styled(IconsAreaStyles)`
    border-right: 2px solid var(--background);
    border-left: 2px solid var(--background);
`



const Notifications = ({ notifications }) => {
    const [opened, setOpened] = useState(false);
    
    const openMenu = (e) => {            
        setOpened((prevState) => !prevState)       
    }


    return(
        <NotificationsStyles >
           {notifications > 0 
            ?
                <NotificationsArea onClick={openMenu} >
                    <Icon.Bell size={28}/>
                    <BadgeNotification>
                        <span>{notifications}</span>
                    </BadgeNotification>
                </NotificationsArea>
            : 
            <EmptyNotificationsArea onClick={openMenu}>
                    <Icon.Bell size={28}/>
                </EmptyNotificationsArea>
            }

            <NotificationList opened={opened} setOpened={setOpened} />
        </NotificationsStyles>
    )
}

export default Notifications