import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 2px solid #894242;
    padding: 20px;

    div {
        flex: 1;
    }

    .information, .buttons {
        display: flex;
        justify-content: space-between;
    }

    button {
        background-color: #894242;
    }
    button:hover {
        background-color: #A85151;
    }

    img {
        max-width: 120px;
        object-fit: cover;
        margin-left: 40px;
        background-color: transparent !important;
    }
`;