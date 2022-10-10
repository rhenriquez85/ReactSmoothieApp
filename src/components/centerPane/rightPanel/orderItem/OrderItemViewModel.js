//
const orderItemViewModel = (props, ctx, params) => {
    const { title, price, img, menuType, description } = props.data;
    const { cartCtx, pageCtx } = ctx;
    const { removeAmount } = params;
    const data = { title, price, img, menuType, description };

    const removeFromCart = () => {
        cartCtx.removeFromCart( { title, price, amount: -1 * removeAmount });
    };

    const linkToPage = () => {
        pageCtx.setState(data);
    };

    return { removeFromCart, linkToPage };
};

export { orderItemViewModel };