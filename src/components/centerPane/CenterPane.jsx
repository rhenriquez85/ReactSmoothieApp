import { RowContainer } from "../common/RowContainer";
import { LeftPanel } from "./leftPanel/LeftPanel";

const CenterPane = () => {

    return (
        <RowContainer>
            <LeftPanel />
            <div>Main Area</div>
            <div>Right panel</div>
        </RowContainer>
    )
};

export { CenterPane };