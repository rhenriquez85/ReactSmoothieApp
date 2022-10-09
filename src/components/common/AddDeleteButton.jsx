import styled from 'styled-components';

const StyledButton = styled.button`
    display: inline-block;
    width: fit-content;
    height: fit-content;
`;

const AddDeleteButton = (props) => {
    const { sign, caption, clickHandler } = props;

    return (
        <StyledButton onClick={clickHandler}>
            {caption || sign}
        </StyledButton>
    );
};

export { AddDeleteButton };