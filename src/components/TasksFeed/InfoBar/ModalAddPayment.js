import React, { useRef, useEffect, useCallback, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import uniqid from 'uniqid';
import Button from '../../_Buttons/index'

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    z-index: 20;
`;

const ModalWrapper = styled.div`
    width: 80vw;
    padding: 10%; 
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    position: relative;
    z-index: 21;
    border-radius: 10px;
    display: flex; 
    flex-direction: column;

    @media screen and (min-width: 1024px) {
        width: 30vw;
        padding: 10% 5%; 
    }
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
    
    p {
      margin-bottom: 1rem;
      font-size: 2rem;
      line-height: 2rem;
      font-weight: bold;
      text-align: center;
    }

    span {
        margin-bottom: 1.5rem;
        color: var(--grey-one);
        text-align: center;
        line-height: 1.15rem;
    }

    button {
        width: 100%;
    }

    button + button {
        margin-top: 15px;
    }

    form {
      display: flex;
      flex-direction: column;

      label {
        font-size: 0.9rem;
        color: var(--grey-one);

      }

      input {
        border: 1px solid var(--grey-three);
        padding: 10px;
        margin-bottom: 20px;
        border-radius: 5px;
      }

      input:focus {
        border: 1px solid var(--primary);
      }
    }

    @media screen and (min-width: 1024px) {
        
        .buttons {
            flex-direction: row;
            
            button {
                width: auto;
                min-width: 150px;
            }

            button + button {
                margin-left: 30px;
            }
        }
    }

`;




export const ModalAddPayment = ({ showModal, setShowModal, cardsArray, setCardsArray  }) => {

  const [title, setTitle] = useState('') 
  const [description, setDescription] = useState('') 
  const [valueToPay, setValueToPay] = useState('') 
  const [date, setDate] = useState('')
  const [inputValues, setInputValues] = useState({
    id: uniqid(),
    status: '',
    taskValue: '', 
    taskTitle: 'aqui', 
    taskDescription: ''
  })

  function checkStatus(date) {
    const fullDate = new Date()
    const day = () => { 
      if(fullDate.getDate() < 10) {
        return '0' + fullDate.getDate()
      } else {
        return fullDate.getDate()
      }
    } 
    const month = fullDate.getMonth() + 1
    const year = fullDate.getFullYear()
    const today = `${year}-${month}-${day}`
    
     if(today > date) {
       return 'late'
     } else {
       return 'toDo'
     }
  } 

  const setValues = () => {

    setInputValues({
      status: checkStatus(date),
      taskTitle: title, 
      taskDescription: description,
      taskValue: valueToPay 
    });
  }

  const addPayment = (e) => {
    e.preventDefault();
    setCardsArray(cardsArray.concat(inputValues))
    setShowModal(prev => !prev)
  }

  //modal
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );
  // fim modal


  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              
              <ModalContent>
                  <p>Adicionar pagamento</p>
                  <span>Preencha todos os campos para adicionar programação de pagamento</span>
                  
                  <form>
                    <label htmlFor="title">Nome da tarefa</label>
                    <input type="text" name="title" onChange={e => setTitle(e.target.value)} onBlur={setValues}required/>

                    <label htmlFor="description">Descrição</label>
                    <input type="text" name="description" onChange={e => setDescription(e.target.value)} onBlur={setValues} required/>
                    
                    <label htmlFor="valueToPay">Valor a pagar</label>
                    <input type="text" name="valueToPay" onChange={e => setValueToPay(e.target.value)} onBlur={setValues}required/>

                    <label htmlFor="date">Data a pagar</label>
                    <input type="date" name="date" onChange={e => setDate(e.target.value)} onBlur={setValues} required/>

                    <div className='buttons'>
                        <Button onClick={() => setShowModal(prev => !prev)}>cancelar</Button>
                        <Button primary onClick={addPayment} type='submit'>Sim, ADICIONAR</Button>
                    </div>
                  </form>


              </ModalContent>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};