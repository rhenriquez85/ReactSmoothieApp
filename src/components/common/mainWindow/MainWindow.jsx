import styled from 'styled-components';

const Container = styled.div`
    /* position: absolute; */
    position: fixed;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -20%);
    max-width: 800px;
    min-width: 700px;
    width: 60%;
    max-height: 700px;
    min-height: 600px;
    height: 60%;
    background-color: #c00101;
    border-radius: 20px;

    @media (pointer:coarse), (pointer:none), (max-width:768px) {
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
    justify-content: center;
    top: 1%;
    left: 1%;
    border-radius: inherit;
    width: 98%;
    height: 98%;
    background-color: lightgrey;
    grid-template-rows: 20% 60% 20%;
`;

const MainWindow = () => {
    return (
        <Container> 
            <Overlay>
                <div>Header</div>
                <div>Center Pane</div>
                <div>Footer</div>
            </Overlay>
        </Container>);
};





export { MainWindow };