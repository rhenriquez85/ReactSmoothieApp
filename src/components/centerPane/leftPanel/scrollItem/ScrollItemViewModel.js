//
const scrollItemViewModel = (props, ctx) => {
    const { title, price, img, menuType, description } = props;
    const { pageCtx, cartCtx } = ctx;
    const data = { title, price, img, menuType, description }

    const selectMenuItem = () => {
        pageCtx.setState(data);
        console.log('setMenuItem');
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