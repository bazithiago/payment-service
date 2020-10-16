import styled from 'styled-components';

const HeaderStyles = styled.div`
    width: 100%;
    height: 80px;
    background-color: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
    padding-right: 25px;

    & > div {
        width: 80px;
        height: 100%;
        border-right: 1px solid #F5F6FA;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default HeaderStyles;