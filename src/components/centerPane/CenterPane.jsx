import styled from "styled-components";
import { RowContainer } from "../common/RowContainer";
import { LeftPanel } from "./leftPanel/LeftPanel";
import { MessageArea } from "./messageArea/MessageArea";

const StyledRowContainer = styled(RowContainer)`
    border-image: linear-gradient(to bottom, black, grey) 1;
`;

const CenterPane = () => {

    return (
        // <RowContainer>
        <StyledRowContainer>
            <LeftPanel />
            <MessageArea />
            <div>Right panel</div>
        </StyledRowContainer>    
        // </RowContainer>
    )
};

export { CenterPane };