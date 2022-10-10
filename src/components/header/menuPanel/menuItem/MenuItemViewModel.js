//
const menuItemViewModel = (props, ctx) => {
    const { itemName } = props;
    const { menuCtx, pageCtx } = ctx;

    const updateMenu = () => {
        if (menuCtx.isMenuType(itemName)) {
            menuCtx.setCurrentMenu(itemName);
            pageCtx.setState(pageCtx.getFirstItem(itemName));
        }
    };

    return { updateMenu };
};

export { menuItemViewModel };