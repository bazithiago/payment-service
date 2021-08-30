import React from 'react';
import styled from 'styled-components';
import InfoBar from './InfoBar';
import ClientInfo from './ClientInfo'
import Card from './Cards';
import Separator from '../_Separator';


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
export const clientInfosData = {
    photo: '',
    name: 'Serge Gilroy',
    city: 'city',
    state: 'SP',
    users: [1, 2],
    parents: [
        {
            name: 'January Gilroy',
            email: 'j.gilroy@gmail.com',
            phone: '626-555-1234',
            photo: ''
        }
    ]
}


const TasksFeed = ({ userName }) => {
	return (
		<FeedStyles>
            <div>
                <InfoBar userName={userName} /> 
                <CardsList>
                    <Separator hrColor='var(--grey-four)'>Charlote Hornets</Separator>
                        <Card 
                            status='late'
                            taskValue='999' 
                            taskTitle='Título da tarefa' 
                            taskDescription='Descrição completa da tarefa com observações e detalhes técnicos repassados pela equipe. '
                        />
                        <Card 
                            status='toDo'
                            taskValue='999' 
                            taskTitle='Título da tarefa' 
                            taskDescription='Descrição completa da tarefa com observações e detalhes técnicos repassados pela equipe. '
                        />
                        <Card 
                            status='okay'
                            taskValue='999' 
                            taskTitle='Título da tarefa' 
                            taskDescription='Descrição completa da tarefa com observações e detalhes técnicos repassados pela equipe. '
                        />
                        <Card 
                            status='okay'
                            taskValue='999' 
                            taskTitle='Título da tarefa' 
                            taskDescription='Descrição completa da tarefa com observações e detalhes técnicos repassados pela equipe. '
                        />


                </CardsList>
            </div>

            <ClientInfo clientInfosData={clientInfosData}/>

		</FeedStyles>
	);
};

export default TasksFeed;

