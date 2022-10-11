import styled from "styled-components";
import { RowContainer } from "../common/RowContainer";
import { LeftPanel } from "./leftPanel/LeftPanel";
import { MessageArea } from "./messageArea/MessageArea";
import { Info } from "../pages/info/Info";
import { Checkout } from "../pages/Checkout/Checkout";
import { RightPanel } from "./rightPanel/RightPanel";
import { Route, Routes } from "react-router-dom";

const StyledRowContainer = styled(RowContainer)`
    border-image: linear-gradient(to bottom, black, grey) 1;
`;

const CenterPane = () => {
    console.log('centerpane')

    return (
            <StyledRowContainer>
                <LeftPanel />
                <Routes>
                    <Route path="*" element={<MessageArea/>} />
                    <Route path="info" element={<Info/>} />
                    <Route path="checkout" element={<Checkout />} />
                </Routes>
                <RightPanel />
            </StyledRowContainer>    
    )
};

export { CenterPane };