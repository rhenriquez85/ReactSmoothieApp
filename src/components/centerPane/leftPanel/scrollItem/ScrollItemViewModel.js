//
const scrollItemViewModel = (props, ctx) => {
    const { title, price, img, menuType, description } = props;
    const { pageCtx, cartCtx } = ctx;

    const selectMenuItem = () => {
        const data = { title, price, img, menuType, description }
        pageCtx.setState(data);
        console.log('setMenuItem');
    };

    const addToCart = () => {
        console.log('addcart')
        cartCtx.addToCart({ title, price });
    }

    const removeFromCart = () => {
        console.log('removecart')
        cartCtx.removeFromCart({ title, price });
    }

    return { selectMenuItem, addToCart, removeFromCart };
};

export { scrollItemViewModel };