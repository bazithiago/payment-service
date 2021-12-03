import styled from 'styled-components';

export const EditOptions = styled.div`
    position: relative;
    align-self: flex-end;
    margin: -15px -20px 0 0;
    
    & > svg {
        cursor: pointer;
    }
`

export const EditOptionsMenu = styled.div`
    position: absolute;
    z-index: 10;
    right: 0;
    min-width: 100px;
    flex-direction: column;
    padding: 15px;
    background-color: var(--white);
    box-shadow: 0px 4px 8px var(--grey-four);
    border-radius: 5px;
    color: var(--grey-two);
    font-weight: bold;
    display: ${(props) => (props.opened ? 'flex' : 'none')};
    height: ${(props) => (props.opened ? 'auto' : '0')};
    
    & > span + span {
        margin-top: 15px;
    }

    & > span:hover {
        color: var(--grey-one);
    }

    span.edit {
        cursor: not-allowed;
        color: var(--grey-three);
    }
    span.delete {
        cursor: pointer;

        &:hover {
            color: var(--red-alert);
        }
    }
`