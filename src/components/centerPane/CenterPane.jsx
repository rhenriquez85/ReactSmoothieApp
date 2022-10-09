import React from 'react';
import styled from "styled-components";
import { RowContainer } from "../common/RowContainer";
import { LeftPanel } from "./leftPanel/LeftPanel";
import { MessageArea } from "./messageArea/MessageArea";
import { RightPanel } from "./rightPanel/RightPanel";
import { PageContext, defaultContext } from "../../store/page-context";

const StyledRowContainer = styled(RowContainer)`
    border-image: linear-gradient(to bottom, black, grey) 1;
`;

const CenterPane = () => {

    return (
        <PageContext.Provider value={defaultContext}>
            <StyledRowContainer>
                <LeftPanel />
                <MessageArea />
                <RightPanel />
            </StyledRowContainer>    
        </PageContext.Provider>
    )
};

export { CenterPane };