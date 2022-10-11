import styled from 'styled-components';

const Container = styled.div`
    padding: 10px;
    align-self: end;
    overflow-wrap: break-word;

    .bottom {
        margin: 65px auto;
    }

    p {
        margin: 10px;
    }

    @media (pointer:coarse), (pointer:none), (max-width:800px) {
        padding: 4vw;
        margin: auto 0px;
        font-size: 3.5vw;
        
        .bottom {
            margin: 0;
        }

        p {
            margin: 1.4vh 0px;
        }
    }
`;

const Info = () => {
    return (
        <Container>
            <div className='top'>
                <p>Thank you for visiting <em><strong>r3seprojects.com!</strong></em></p>
                <p>This site was created by Rene Henriquez, a full-stack software engineer living in Miami, FL.</p>
            </div>
            <br />
            <div className='bottom'>
                <p>For more information, please visit:</p>
                <p><a href={'https://www.linkedin.com/in/rene-henriquez-63bb40113/'}>https://www.linkedin.com/in/rene-henriquez-63bb40113/</a></p>
                <p><a href={'https://github.com/rhenriquez85'}>https://github.com/rhenriquez85</a></p>
            </div>
        </Container>
    );
};

export { Info };