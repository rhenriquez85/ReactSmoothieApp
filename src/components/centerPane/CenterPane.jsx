import { RowContainer } from "../common/RowContainer";
import { LeftPanel } from "./leftPanel/LeftPanel";
import { MessageArea } from "./messageArea/MessageArea";

const CenterPane = () => {

    return (
        <RowContainer>
            <LeftPanel />
            <MessageArea />
            <div>Right panel</div>
        </RowContainer>
    )
};

export { CenterPane };