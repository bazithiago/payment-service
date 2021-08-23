import React from "react"
import styled from "styled-components"
import * as Icon from 'react-feather';
import Notifications from '../Notifications';
import IconsAreaStyles from '../IconsAreaStyles'

const InfoAreaStyles = styled.div`
    display: flex;
    height: 100%;
`

const UserArea = styled.div`
    padding: 0 20px;
    display: flex;
    align-items: center;
    cursor: pointer;

    & > img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-right: 10px;
    }

    & > span {
        display: none
    }

    & > svg {
        transition: all 0.3s ease-in-out;
        color: var(--grey-three);
        margin-right: 4px
    }

    &:hover{
        & > span {
            color: var(--grey-one);

        }
        
        & > svg {
            color: var(--grey-one);
        }

    }

    @media screen and (min-width: 1024px) {
    
        & > span {
            display: block;
            color: var(--grey-two);
            font-weight: 700;
            font-size: 0.9rem;
            margin: 0 15px 0 0;
            transition: all 0.3s ease-in-out;
        }

    }

`

const HelpArea = styled(IconsAreaStyles)`
    display: none;

    @media screen and (min-width: 1024px) {
        display: flex;
    }
`



const InfoArea = ({ notifications, userName, avatar }) => {
    return(
        <InfoAreaStyles>
            <UserArea>
                <img 
                    src={avatar}
                    alt={`${userName}'s avatar`}
                />
                <span>{userName}</span>
                <Icon.ChevronDown size={20}/>
            </UserArea>
            <Notifications notifications={notifications}/>
            <HelpArea>
                <Icon.LifeBuoy size={28}/>
            </HelpArea>
        </InfoAreaStyles>
    )
}

export default InfoArea