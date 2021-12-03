import React, { useState } from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';
import InfoBar from './InfoBar';
import ClientInfo from './ClientInfo'
import Card from './Card';
import Separator from '../_Separator';
import { clientInfosData, cardsListMap } from '../../server/dataClient'

const FeedStyles = styled.div`
    display: flex;
    padding: 0;
    
    & > :nth-child(1) {
        width: 100%;
    }
    
    @media screen and (min-width: 1024px) {
        padding: 80px 0 0 100px;
        
        & > :nth-child(1) {
            display: flex;
            flex-direction: column;
            padding: 0 30px 0 70px;
        }
    }
`

const CardsList = styled.div`
    width: 100%;
    padding: 30px 30px 0 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    
    @media screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: flex-start;
    }


    @media screen and (min-width: 1400px) {
        padding: 0 20px 0 0;
        flex-direction: row;
        align-items: flex-start;
        flex-wrap: wrap;
        justify-content: space-between;
        overflow-y: auto;
        overflow-x: hidden;
        height: 100vh;
    }
`



const TasksFeed = () => {
    const [cardsArray, setCardsArray] = useState(cardsListMap) //array para o map
    
    
    const handleDelete = (card) => {
        let newCardsArray = cardsArray.filter((cards) => cards !== card);
        setCardsArray(newCardsArray)
    }


	return (
		<FeedStyles>
            <div>
                <InfoBar clientName={clientInfosData.name} cardsArray={cardsArray} setCardsArray={setCardsArray} /> 
                <CardsList>
                    <Separator hrColor='var(--grey-four)'>Registros recentes</Separator>

                        {cardsArray.map(( card ) => {
                            return(
                                <Card 
                                    key={uniqid()}
                                    id={uniqid()}
                                    status={card.status}
                                    taskValue={card.taskValue}
                                    taskTitle={card.taskTitle}
                                    taskDescription={card.taskDescription}
                                    handleDelete={() => handleDelete(card)}
                                />
                            )
                        })}

                </CardsList>
            </div>

            <ClientInfo clientInfosData={clientInfosData}/>

		</FeedStyles>
	);
};

export default TasksFeed;

