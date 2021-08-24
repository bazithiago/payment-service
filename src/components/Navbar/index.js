import React from 'react'
import styled from 'styled-components'
import * as Icon from 'react-feather';
import navbarData from './navbarData'

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
    justify-content: space-between;
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
`

const NavSideMobile = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10vh;
    list-style-type: none;
      
    div {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: var(--grey-three);
        height: 50px;
        margin: 15px 0;

        svg {
            margin: 0 50px 0 28px;
        }

        span {
            font-family: Roboto, sans-serif;
            font-size: 1.4rem;
        }

        &:before{
        content: '';
        width: 5px;
        height: 100%;
        background-color: transparent;
        border-radius: 0 4px 4px 0;
        }

        &:hover {
            color: var(--primary);

            &:before{
                content: '';
                width: 5px;
                height: 100%;
                background-color: var(--primary);
            }
        }
    }
`

const NavSideDesktop = styled.nav`
    display: none;

    @media screen and (min-width: 1024px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100px;
        height: 100vh;
        background-color: var(--white);
        border-right: 2px solid var(--background);
        position: fixed;
        top: 0;
        margin-top: 80px;
        background-color: red;
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
                    {navbarData.map((item, index) => {
                        return (
                            <div key={index}>
                                {item.icon}<span>{item.title}</span>
                            </div>
                        )
                    })}
                </NavSideMobile>
                <span></span>
            </MenuNav>
                <NavSideDesktop>
                    {navbarData.map((item, index) => {
                        return (
                            <div key={index}>
                                {item.icon}<span></span>
                            </div>
                        )
                    })}
                </NavSideDesktop>
        </>
    )
}

export default Navbar
