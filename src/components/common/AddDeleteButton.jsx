import styled from 'styled-components';

const StyledButton = styled.button`
    display: inline-block;
    width: fit-content;
    height: fit-content;
`;

const AddDeleteButton = (props) => {
    const { sign, caption } = props;

    return (
        <StyledButton>
            {caption || sign}
        </StyledButton>
    );
};

export { AddDeleteButton };