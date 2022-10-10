import logo from '../../../images/logo.jpeg';

const leftCornerViewModel = (props, ctx) => {
    const { menuCtx } = ctx;

    const clickHandler = () => {
        menuCtx.setCurrentMenu('');
    };

    return { logo, clickHandler };
};

export { leftCornerViewModel };