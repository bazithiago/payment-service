import React from 'react'
import styled from 'styled-components'
import * as Icon from 'react-feather'
import NavList from './NavList'

const Icons = styled.a`
    width: 100px;
    height: 80px;
    border-right: 2px solid var(--background);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--grey-three);

    &:hover {
        color: var(--primary);
    }
`
const MenuIcon = styled.a`
    width: 90px;
    height: 80px;
    border-right: 2px solid var(--background);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    color: var(--grey-three);
    
    &:hover {
        color: var(--primary);
    }

    @media screen and (min-width: 1024px) {
        display: none;
    }
`

const LogoIcon = styled.a`
    width: 100px;
    height: 80px;
    border-right: 2px solid var(--background);
    justify-content: center;
    align-items: center;
    color: var(--primary);
    display: none;
    z-index: 5;
    
    &:hover {
        color: var(--grey-two);
    }

    @media screen and (min-width: 1024px) {
        position: fixed;
        display: flex;
        top: 0;
    }
`

const MenuNav = styled.div`
    background-color: var(--background);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    position: fixed;
    top: 0;
    z-index: 5;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);

    &.active {
        left: 0;
        transition: all 0.5s;
        transition-timing-function: ease-in-out;
    }
    
    &.disabled {
        left: -150%;
        transition: all 0.5s;
        transition-timing-function: ease-in-out;
    }

    @media screen and (min-width: 1024px) {
        display: none;
    }
`

const NavSideMobile = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 15vh;
`

const NavSideDesktop = styled.nav`
    display: none;
    transition: all 0.2s ease-in-out;
    

    @media screen and (min-width: 1024px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width: 100px;
        height: 100vh;
        background-color: var(--white);
        border-right: 2px solid var(--background);
        position: fixed;
        top: 0;
        padding-top: 100px;
        z-index: 2;

        & > div {
            width: 100%;
        }

        & > div > div > span {
           display: none;
        }


        &:hover {
            width: 330px;
            transition: all 0.2s ease-in-out;

            & > div > div > span {
               display: block;
        }

        }
    }

`;

function Navbar() {
    const [sidebar, setSidebar] = React.useState(false)
    
    const showSidebar = function() {
        setSidebar(!sidebar);
    };

   
    return (
        <>
            <LogoIcon>
                <Icon.Disc size={30} />
            </LogoIcon>
            <MenuIcon>
                <Icon.Menu 
                    size={30}
                    onClick={showSidebar}
                />
            </MenuIcon>
            <MenuNav className={sidebar ? 'active' : 'disabled'}> 
                <Icons>
                    <Icon.X 
                        size={30}
                        onClick={showSidebar}
                    />
                </Icons>
                <NavSideMobile>
                    <NavList />
                </NavSideMobile>
            </MenuNav>

            <NavSideDesktop>
                <NavList />
            </NavSideDesktop>
        </>
    )
}

export default Navbar
