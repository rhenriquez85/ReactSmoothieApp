import { RowContainer } from '../common/RowContainer';
import { LeftCorner } from './leftCorner/LeftCorner';
import { MenuPanel } from './menuPanel/MenuPanel';
import { RightCorner } from './rightCorner/RightCorner';

const Header = () => {
    return (
        <RowContainer>
            <LeftCorner/>
            <MenuPanel/>
            <RightCorner/>
        </RowContainer>
    )
};

export { Header };