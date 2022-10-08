import styled from 'styled-components';

export const RowContainer = styled.div`
    display: grid;
    grid-template-columns: 25% 55% 20%;
    background-color: darkgrey;
    border-color: black;
    border-width: 2px;
    border-style: solid solid none;

    @media (pointer:coarse), (pointer:none), (max-width:800px) {
        grid-template-columns: 22.5% 55% 22.5%;
    }
`;