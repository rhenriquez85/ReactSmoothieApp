//
const menuItemViewModel = (props, ctx) => {
    const { itemName } = props;
    const { menuCtx } = ctx;

    const updateMenu = () => {
        menuCtx.isMenuType(itemName) && menuCtx.setCurrentMenu(itemName);
    };

    return { updateMenu };
};

export { menuItemViewModel };