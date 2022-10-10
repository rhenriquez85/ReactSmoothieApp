//
const leftPanelViewModel = (props, ctx) => {
    const { menuCtx } = ctx;
    const data = menuCtx.getCurrentMenu();
    const menuTitle = menuCtx.getMenuType();

    console.log('leftPane');

    return { data, menuTitle };
};

export { leftPanelViewModel };