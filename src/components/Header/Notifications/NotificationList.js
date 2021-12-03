import { useEffect, useRef } from 'react' 
import styled from 'styled-components';

const NotificationListStyles = styled.div`
    display: none;

    @media screen and (min-width: 1024px) {
        position: absolute;
        z-index: 10;
        top: 100px;
        right: 0px;
        background-color: var(--white);
        box-shadow: 0px 4px 8px var(--grey-four);
        width: 300px;
        border-radius: 5px;
        display: ${(props) => (props.opened ? 'flex' : 'none')};
        flex-direction: column;
        
        ul {
            width: 100%;
        
            li {
                list-style-type: none;
                width: 100%;
                padding: 15px;
                cursor: pointer;
                display: flex;
                align-items: flex-start;

                :hover {
                    background-color: #c3dcf940;
                }

                div.dot {
                    height: 10px;
                    width: 10px;
                    background-color: var(--blue-one);
                    border-radius: 50%;
                    margin: 5px 15px 0 0;
                }

                div.info {
                    display: flex;
                    flex-direction: column;

                    p {
                        color: var(--grey-one);
                        font-size: 0.9rem;
                    }

                    span {
                        font-size: 0.8rem;
                        font-weight: bold;
                        color: var(--grey-three);
                    }
                }
            }
        }

        & > p {
            font-size: 0.85rem;
            padding: 10px 15px;
            color: var(--grey-two);
            cursor: pointer;
            font-weight: bold;

            :hover {
                color: var(--blue-one);
            }
        }

        p.end{
            align-self: flex-end;
        }

        p.center{
            align-self: center;
        }

        
    }
`

export default function NotificationList({ opened, setOpened }) {
    const wrapperRef = useRef(null);

    function useClickOutsideMenu(ref, opened) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (opened && ref.current && !ref.current.contains(event.target)) {
                    setOpened((prevState) => !prevState)       
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref, opened]);
    };
    useClickOutsideMenu(wrapperRef, opened);


    return(
        <NotificationListStyles opened={opened} ref={wrapperRef}>

            <p className="end"> 2 novas notificações </p>
            <ul>
                <li>
                    <div className="dot"></div>
                    <div className="info">
                        <p>Pagamento para vencer</p>
                        <span>Hoje</span>
                    </div>
                </li>
                <li>
                    <div className="dot"></div>
                    <div className="info">
                        <p>Pagamento agendado não efetuado</p>
                        <span>Ontem</span>
                    </div>
                </li>
                <li>
                    <div></div>
                    <div className="info">
                        <p>Pagamento atrasado</p>
                        <span>Ontem</span>
                    </div>
                </li>
            </ul>
            <p className="center"> mostrar mais </p>

        </NotificationListStyles>
    )
}