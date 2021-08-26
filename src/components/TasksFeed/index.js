import React from 'react';
import styled from 'styled-components';
import InfoBar from './InfoBar';
import ClientInfo from './ClientInfo'
import Card from '../Cards';


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
            padding: 0 35px 0 70px;
        }
    }
`

const CardsList = styled.div`
    width: 100%;
    padding: 0 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
                <p>cards map</p>
            </div>

            <ClientInfo clientInfosData={clientInfosData}/>

            {/* <CardsList>
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

                <p>Aqui entra o map</p>

            </CardsList> */}
		</FeedStyles>
	);
};

export default TasksFeed;

