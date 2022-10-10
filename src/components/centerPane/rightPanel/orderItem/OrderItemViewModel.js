//
const orderItemViewModel = (props, ctx, params) => {
    const { title, price } = props.data;
    const { cartCtx } = ctx;
    const { removeAmount } = params;

    const removeFromCart = () => {
        cartCtx.removeFromCart( { title, price, amount: -1 * removeAmount });
    };

    return { removeFromCart };
};

export { orderItemViewModel };