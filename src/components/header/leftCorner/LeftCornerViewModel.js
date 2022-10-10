import logo from '../../../images/logo.jpeg';

const leftCornerViewModel = (props, ctx) => {
    const { menuCtx, pageCtx } = ctx;

    const clickHandler = () => {
        menuCtx.setCurrentMenu('');
        pageCtx.setState(pageCtx.getFirstItem(''));
    };

    return { logo, clickHandler };
};

export { leftCornerViewModel };