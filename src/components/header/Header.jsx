import { RowContainer } from '../common/RowContainer';
import { LeftCorner } from './leftCorner/LeftCorner';

const Header = () => {
    return (
        <RowContainer>
            <LeftCorner/>
            <div>Message Pane</div>
            <div>Right Corner</div>
        </RowContainer>
    )
};

export { Header };