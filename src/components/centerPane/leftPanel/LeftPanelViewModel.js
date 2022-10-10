//
const leftPanelViewModel = (props, ctx) => {
    const { menuCtx } = ctx;
    const data = menuCtx.getCurrentMenu();

    console.log('leftPane');

    return { data };
};

export { leftPanelViewModel };