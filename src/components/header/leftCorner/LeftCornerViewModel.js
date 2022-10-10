import logo from '../../../images/logo.jpeg';

const leftCornerViewModel = (props, ctx) => {
    const { menuCtx, pageCtx } = ctx;

    const updateMenu = () => {
        menuCtx.setCurrentMenu('Favorites');
        pageCtx.setState(pageCtx.getFirstItem(''));
    };

    return { logo, updateMenu };
};

export { leftCornerViewModel };