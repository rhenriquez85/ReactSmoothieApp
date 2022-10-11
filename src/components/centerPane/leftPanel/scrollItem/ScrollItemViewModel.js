import dataController from "../../../../controllers/dataController";

const scrollItemViewModel = (props, ctx) => {
    const { title, price, img, menuType, description } = props;
    const { pageCtx, cartCtx } = ctx;
    const data = { title, price, img, menuType, description }

    const selectMenuItem = (menuItem) => {
        const item = typeof menuItem === 'string' ? dataController.getItemRouteName(menuItem) : undefined;
        if (item) {
            pageCtx.setState(item);
        }
    };

    const addToCart = () => {
        console.log('addcart')
        cartCtx.addToCart(data);
    }

    const removeFromCart = () => {
        console.log('removecart')
        cartCtx.removeFromCart(data);
    }

    return { selectMenuItem, addToCart, removeFromCart };
};

export { scrollItemViewModel };