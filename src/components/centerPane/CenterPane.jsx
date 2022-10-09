import React, { useContext } from 'react';
import styled from "styled-components";
import { RowContainer } from "../common/RowContainer";
import { LeftPanel } from "./leftPanel/LeftPanel";
import { MessageArea } from "./messageArea/MessageArea";
import { RightPanel } from "./rightPanel/RightPanel";

const StyledRowContainer = styled(RowContainer)`
    border-image: linear-gradient(to bottom, black, grey) 1;
`;

const CenterPane = () => {
    console.log('centerpane')

    return (
            <StyledRowContainer>
                <LeftPanel />
                <MessageArea />
                <RightPanel />
            </StyledRowContainer>    
    )
};

export { CenterPane };