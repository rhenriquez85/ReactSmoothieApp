import styled from 'styled-components';

const StyledButton = styled.button`
    display: inline-block;
    width: 35px;
    height: 20px;
`;

const AddDeleteButton = (props) => {
    const { sign } = props;

    return (
        <StyledButton>
            {sign}
        </StyledButton>
    );
};

export { AddDeleteButton };