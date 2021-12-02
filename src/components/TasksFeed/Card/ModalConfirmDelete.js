import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
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
    width: 100%;
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
        margin-bottom: 1rem;
        color: var(--grey-one)
    }

    button {
        width: 100%;
    }

    button + button {
        margin-top: 15px;
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


export const ModalConfirmDelete = ({ showModal, setShowModal, handleDelete }) => {
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
  
  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              
              <ModalContent>
                <p>Você tem certeza?</p>
                <span>Deseja realmente deletar a tarefa?</span>
                
                <div className='buttons'>
                    <Button onClick={() => setShowModal(prev => !prev)}>cancelar</Button>
                    <Button alert onClick={handleDelete}>Sim, DELETAR</Button>
                </div>

              </ModalContent>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};