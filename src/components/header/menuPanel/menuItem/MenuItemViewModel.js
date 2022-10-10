//
const menuItemViewModel = (props, ctx) => {
    const { itemName } = props;
    const { menuCtx, pageCtx } = ctx;

    const updateMenu = (menuItem) => {
        const item = typeof menuItem === 'string' ? menuItem : itemName;

        if (menuCtx.isMenuType(item)) {
            menuCtx.setCurrentMenu(item);
            pageCtx.setState(pageCtx.getFirstItem(item));
        }
    };

    return { updateMenu };
};

export { menuItemViewModel };