import React from 'react';
import styled from 'styled-components';
import Card from '../Cards';


export const FeedStyles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media screen and (min-width: 1024px) {
        margin-left: 100px;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    position: sticky;   
    top: 0;
    background-color: var(--background);
    margin-top: 10px;
    padding: 20px 30px 30px 30px;

    span {
        font-family: Roboto;
        font-style: normal;
        font-weight: regular;
        font-size: 1.1rem;
        color: var(--grey-two);
    }

    h1 {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 2rem;
        color: var(--grey-one);
    }
`

export const CardsList = styled.div`
    width: 100%;
    padding: 0 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    }
`


const TasksFeed = () => {
	return (
		<FeedStyles>
            <Info>
                <span>Pagamentos</span>
                <h1>Nome do cliente</h1>
            </Info>
            <CardsList>
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
                <h1>Ola</h1>
                <h1>Ola</h1>
                <h1>Ola</h1>
                <h1>Ola</h1>
                <h1>Ola</h1>
                <h1>Ola</h1>
                <h1>Ola</h1>
                <h1>Ola</h1>
                <h1>Ola</h1>
                <h1>Ola</h1>
                <h1>Ola</h1>
                <h1>Ola</h1>
                <h1>Ola</h1>
                <h1>Ola</h1>
                <h1>Ola</h1>
                <h1>Ola</h1>
                <h1>Ola</h1>
                <h1>Ola</h1>
                <h1>Ola</h1>
                <h1>Ola</h1>
                <h1>Ola</h1>
                <h1>Ola</h1>
                <h1>Ola</h1>
                <h1>Ola</h1>
                <h1>Ola</h1>
                <h1>Ola</h1>
            </CardsList>
		</FeedStyles>
	);
};

export default TasksFeed;

