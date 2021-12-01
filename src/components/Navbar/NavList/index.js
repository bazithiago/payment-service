import React from 'react';
import styled from 'styled-components'
import uniqid from 'uniqid';
import { navbarData } from '../../../server/dataSystem'


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
            {navbarData.map((item, index) => {
                return (
                    <div key={uniqid()} href={item.path}>
                        {item.icon}<span>{item.title}</span>
                    </div>
                )
            })}
        </NavListStyles>
    )
}

export default NavList;


