import React from 'react';
import styled from 'styled-components';
import Card from '../Cards';
import InfoBar from './InfoBar';


export const FeedStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media screen and (min-width: 1024px) {
        padding: 0px 100px;
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

const TasksFeed = ({ userName }) => {
	return (
		<FeedStyles>
            <InfoBar userName={userName}/>
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

