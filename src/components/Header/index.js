import React from 'react';
import styled from 'styled-components';
import * as Icon from 'react-feather';
import InfoArea from './InfoArea'
import { userData } from '../../server/dataSystem'

const HeaderStyles = styled.div`
    width: 100%;
    height: 80px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 3;

    @media screen and (min-width: 1024px) {
        position: fixed;
    }
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





const Header = () => {
    const [notifications] = React.useState([99]);
	
    return (
		<HeaderStyles>
            <SearchArea>
                <Icon.Search color={`var(--grey-three)`} />
                <InputSearch placeholder={'Search for...'} />
            </SearchArea>
            <InfoArea 
                notifications={notifications} 
                avatar={userData.avatar}
                userName={userData.username}
            />

		</HeaderStyles>
	);
};

export default Header;
