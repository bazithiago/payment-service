import React from 'react';
import styled from 'styled-components';
import Button from '../../Buttons'
import * as Icon from 'react-feather'

const InfoBarStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    width: 100%;
    position: sticky;   
    top: 0;
    background-color: var(--background);
    padding-left: 30px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);

    h1 {
        font-family: Roboto;
        font-style: normal;
        font-weight: 700;
        font-size: 1.8rem;
        color: var(--grey-one);
    }

    & > div + div {     //buttons
        display: none;
    }

    @media screen and (min-width: 1024px) {
        position: fixed;
        height: 150px;
        top: 80px;
        padding-left: 172px;
        box-shadow: none;
        display: flex;
        justify-content: space-between;

        & > div {                //icons
            display: none;
        }

        & > div + div {          //buttons
            display: flex;

            button + button {
                margin-left: 18px;
                margin-right: 460px
            }
        }
    }

`

const InfoBar = ({ userName }) => {
    console.log(Button)
    return(
        <InfoBarStyles>
            <h1>{userName}</h1>
            <div>
                <Icon.Archive />
                <Icon.Plus />
            </div>
            <div>
                <Button>Payment History</Button>
                <Button primary>Add Payment</Button>
            </div>
        </InfoBarStyles>
    )
}

export default InfoBar