import styled from 'styled-components';
import { Header } from '../header/Header';

const Container = styled.div`
    position: fixed;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -20%);
    width: 800px;
    /* max-width: 800px; */
    /* min-width: 800px; */
    /* max-width: 800px; */
    /* min-width: 700px; */
    /* width: 60%; */
    /* height: 700px; */
    height: 600px;
    /* max-height: 700px; */
    /* min-height: 700px; */
    /* max-height: 700px; */
    /* min-height: 600px; */
    /* height: 60%; */
    background-color: #c00101;
    background-color: lightgrey;
    border-radius: 20px;

    @media (pointer:coarse), (pointer:none), (max-width:800px) {
        /* top: 2%; */
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
    /* justify-content: center; */
    /* justify-content: left; */
    top: 1%;
    left: 1%;
    border-radius: inherit;
    width: 98%;
    height: 98%;
    /* background-color: lightgrey; */
    /* background-color: #c00101; */
    background-color: grey;
    grid-template-rows: 15% 75% 10%;
    /* gap: 5em; */

`;

const MainWindow = () => {
    return (
        <Container> 
            <Overlay>
                <Header />
                <div>Center Pane</div>
                <div>Footer</div>
            </Overlay>
        </Container>);
};






export { MainWindow };