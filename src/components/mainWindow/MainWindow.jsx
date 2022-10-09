import styled from 'styled-components';
import { Header } from '../header/Header';
import { CenterPane } from '../centerPane/CenterPane';

const Container = styled.div`
    position: fixed;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -20%);
    width: 800px;
    height: 600px;
    background-color: #c00101;
    background-color: lightgrey;
    border-radius: 20px;

    @media (pointer:coarse), (pointer:none), (max-width:800px) {
        top: 25vh;
        max-width: 90vw;
        min-width: 90vw;
        max-height: 70vh;
        min-height: 70vh;
    }
`;

const Overlay = styled.div`
    position: absolute;
    display: grid;
    top: 1%;
    left: 1%;
    border-radius: inherit;
    width: 98%;
    height: 98%;
    background-color: grey;
    grid-template-rows: 15% 75% 10%;



    .footer {
        border-top: grey solid 2px;
        border-image: linear-gradient(to right, grey, black, black, black, grey) 1;
    }
`;

const MainWindow = () => {
    return (
        <Container> 
            <Overlay>
                <Header />
                <CenterPane />
                <div className='footer'>Footer</div>
            </Overlay>
        </Container>);
};

export { MainWindow };