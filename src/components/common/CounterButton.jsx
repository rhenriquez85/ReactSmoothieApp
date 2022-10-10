import { useEffect } from 'react'
import styled from 'styled-components';

const StyledInput = styled.input`
    width: 100%;
`;

const CounterButton = (props) => {
    const { clickHandler } = props;

    const changeHandler = (event) => {
        clickHandler(event.target.valueAsNumber);
    };

    return (
        <StyledInput type='number' min={1} max={9} defaultValue={1} onChange={changeHandler} />
    )
};

export { CounterButton };