import React from 'react';
import styled from 'styled-components';
import * as Icon from 'react-feather';
import Button from '../../_Buttons'


export const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 100%;
    background: #FFFFFF;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    padding: 30px 35px;
    margin: 0 0 25px 0;

    & > svg {
        align-self: flex-end;
        margin: -15px -20px 0 0;
        cursor: pointer;
    }

    & > span {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: rgba(0, 217, 110,0.1);
        color: var(--primary);
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 1.5rem;
        margin: 0 0 30px 0;
    }

    h1 {
        font-weight: bold;
        font-size: 1.25rem;
        color: var(--grey-one);    
    }

    p {
        font-weight: normal;
        font-size: 0.9rem;
        line-height: 1.2rem;
        text-align: center;
        color: var(--grey-two);
        margin: 15px 0 25px 0;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3; /* number of lines to show */
        -webkit-box-orient: vertical;
    }

    ${(props)=>{
        if(props.status === 'late'){
            return(`
                span {
                    background-color: rgba(227, 50, 76, 0.1);
                    color: var(--red-alert);
                }
                
                & > div {
                    display: grid;
                    grid-auto-flow: column;
                    gap: 12px;
                    
                    & > button {
                        padding: 8px 20px;
                }
                
                }
                
            `);

        } else if(props.status === 'toDo'){
            return(`
                span {
                    background-color: rgba(251, 159, 54, 0.1);
                    color: var(--yellow-attention);
                }
            `);

        }
    }}


@media screen and (min-width: 480px) {
    max-width: 280px;
}

@media screen and (min-width: 1024px) {
    width: 15vw;
    min-width: 280px;
    min-height: 365px;
}
`

const AllRight = styled.div`
    display: flex;
    align-items: center;
    height: 20px;
    padding: 20px 0;


    & span {
        font-weight: 700;
        font-size: 0.9rem;
        text-align: center;
        text-transform: uppercase;
        color: var(--primary);
        margin-left: 5px;
    }

    & svg {
        stroke-width: 0.15rem;
        margin-bottom: 3px;
    }
`



const Card = ({status, taskValue, taskTitle, taskDescription}) => {
    return(
        <CardStyle status={status}>
            <Icon.MoreVertical color={`var(--grey-three)`}/>
            <span>{`$${taskValue}`}</span>
            <h1>{taskTitle}</h1>
            <p>{taskDescription}</p>


            { status==='late' ? 
                <div>
                    <Button status={status}>Agendar</Button>
                    <Button>Gerenciar</Button>
                </div> 
                : <></>
            }

            { status==='toDo' ? 
                <Button status={status}>Agendar</Button>
                : <></>
            }     

            { status==='okay' ? 
                <AllRight>
                    <Icon.CheckSquare size={20} color={`var(--primary)`}/>
                    <span>Tudo certo!</span>
                </AllRight>
                : <></>
            }  
        </CardStyle>
    );
}

export default Card;