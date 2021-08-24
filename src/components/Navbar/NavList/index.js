import React from 'react';
import styled from 'styled-components'
import navbarData from '../navbarData'
// import * as Icon from 'react-feather'


const NavListStyles = styled.div`
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
            display: block;
            position: fixed;
            margin-left: 35px;
        }

        span {
            font-family: Roboto, sans-serif;
            font-size: 1.4rem;
            margin-left: 100px;
        }

        &:before{
            content: '';
            width: 5px;
            height: 100%;
            background-color: transparent;
            border-radius: 0 4px 4px 0;
            margin-right: 30px;
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


const NavList = () => {
    return(
        <NavListStyles>
            {navbarData.map((item, route, index) => {
                return (
                    <div key={index}>
                        {item.icon}
                        <a href={route}>
                            <span>{item.title}</span>
                        </a>
                    </div>
                )
            })}
        </NavListStyles>
    )
}

export default NavList;


