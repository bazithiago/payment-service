import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../_Buttons'
import * as Icon from 'react-feather'
import { ModalAddPayment } from './ModalAddPayment'

const InfoBarStyles = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    width: 100%;
    background-color: var(--background);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
    padding: 0 0 0 30px;

    h1 {                        
        font-style: normal;
        font-weight: 700;
        font-size: 1.8rem;
        color: var(--grey-one);
    }

    & > :nth-child(2) {     //icon mobile
        margin-right: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--primary);
        border-radius: 50%;
        padding: 5px;
        color: var(--white);
        width: 40px;
        height: 40px;
        cursor: pointer;

        :hover {
            background-color: var(--primary-hover);
        }
    }

    & > :nth-child(3) {     //buttons desktop
        display: none;
    }

    @media screen and (min-width: 1024px) {
        height: 150px;
        box-shadow: none;
        display: flex;
        justify-content: space-between;
        padding: 0 32px 0 0;
        
        & > :nth-child(2) {                //icon mobile
            display: none;
        }

        & > :nth-child(3) {          //buttons desktop
            display: flex;

            button + button {
                margin-left: 18px;
            }
        }
    }

`

const InfoBar = ({ clientName, cardsArray, setCardsArray }) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return(
        <InfoBarStyles>
            <h1>{clientName}</h1>
            <div onClick={openModal}>
                <Icon.Plus />
            </div>
            <div>
                <Button>Histórico</Button>
                <Button primary onClick={openModal}> Novo pagamento</Button>
            </div>
        <ModalAddPayment showModal={showModal} setShowModal={setShowModal} cardsArray={cardsArray} setCardsArray={setCardsArray}/>
        </InfoBarStyles>
    )
}

export default InfoBar