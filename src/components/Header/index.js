import React from 'react';
import styled from 'styled-components';
import * as Icon from 'react-feather';
import Notifications from './Notifications';
import IconsArea from './IconsArea/index'


const HeaderStyles = styled.div`
    width: 100%;
    height: 80px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const SearchArea = styled.div`
    display: flex;
    align-items: center;
    margin-left: 110px;
    flex: 1;

    @media screen and (min-width: 1024px) {
        margin-left: 130px;

    }
`
const InputSearch = styled.input`
    margin-left: 18px;
    font-size: 1.5rem;
    font-weight: 300;
    color: var(--grey-two);
    width: 100%;

    ::placeholder{
        color: var(--grey-three);
        transition: all 0.2s;

    }
    :focus::placeholder{
        color:transparent;
        transition: all 0.2s;
    }
`

const UserArea = styled.div`
    display: flex;
    height: 100%;
`





const Header = () => {
    const [notifications, setNotifications] = React.useState([99]);
	
    return (
		<HeaderStyles>
            <SearchArea>
                <Icon.Search color={`var(--grey-three)`} />
                <InputSearch placeholder={'Search for...'} />
            </SearchArea>
            <UserArea>
                <Notifications notifications={notifications}/>
                <IconsArea>
                    <Icon.LifeBuoy size={28}/>
                </IconsArea>
            </UserArea>
		</HeaderStyles>
	);
};

export default Header;
