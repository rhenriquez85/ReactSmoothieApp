import styled from 'styled-components';

const StyledButton = styled.input`
    width: 100%;
`;

const CounterButton = () => {
    return (
        <StyledButton type='number' min={1} max={9} placeholder={1} />
    )
};

export { CounterButton };