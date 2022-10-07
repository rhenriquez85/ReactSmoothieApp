import styled from 'styled-components';

const Container = styled.div`
    span.amount {
        background-color: lightgrey;
        border-radius: 2px;
    }

    @media (pointer:coarse), (pointer:none), (max-width:800px) {
        span.title {
            margin-left: 15%;
        }

        span.amount {
            padding-bottom: 0px;
            margin-bottom: 0px;
        }
    }
`;

const TotalCart = (props) => {
    const { amount } = props;
    return (
        <Container>
            <span className='title'>Total: </span><span className='amount'>${amount.toFixed(2)}</span>
        </Container>
    );
};

export { TotalCart };