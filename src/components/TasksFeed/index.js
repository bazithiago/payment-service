import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';
import InfoBar from './InfoBar';
import ClientInfo from './ClientInfo'
import Card from './Cards';
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

const CardExample = 
    {
        status: 'late',
        taskValue: '333', 
        taskTitle: 'teste', 
        taskDescription: 'teste'
    }

const TasksFeed = () => {
    const [CardsArray, setCardsArray] = useState(cardsListMap) //array para o map
    
    const addCard = () => {
        setCardsArray(CardsArray.concat(CardExample))
    }


	return (
		<FeedStyles>
            <div>
                <InfoBar clientName={clientInfosData.name} addCard={addCard}/> 
                <CardsList>
                    <Separator hrColor='var(--grey-four)'>Charlote Hornets</Separator>

                    {CardsArray.map(( card ) => {
                        return(
                            <Card 
                                key={uniqid()}
                                status={card.status}
                                taskValue={card.taskValue}
                                taskTitle={card.taskTitle}
                                taskDescription={card.taskDescription}
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

