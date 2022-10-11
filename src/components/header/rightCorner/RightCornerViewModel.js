//
const rightCornerViewModel = (props, ctx, params) => {
    const { cartCtx } = ctx;
    const { navigate } = params;

    const totalCart = () => {
        return cartCtx.totalCart();
    };

    const goToCheckout = () => {
        navigate('/checkout');
    }

    return { totalCart, goToCheckout };
};

export { rightCornerViewModel };