import React, { useContext } from 'react';
import styled from "styled-components";
import { RowContainer } from "../common/RowContainer";
import { LeftPanel } from "./leftPanel/LeftPanel";
import { MessageArea } from "./messageArea/MessageArea";
import { RightPanel } from "./rightPanel/RightPanel";
import { PageContextProvider } from "../../store/page-context";

const StyledRowContainer = styled(RowContainer)`
    border-image: linear-gradient(to bottom, black, grey) 1;
`;

const CenterPane = () => {
    console.log('centerpane')

    return (
        <PageContextProvider>
            <StyledRowContainer>
                <LeftPanel />
                <MessageArea />
                <RightPanel />
            </StyledRowContainer>    
        </PageContextProvider>
    )
};

export { CenterPane };