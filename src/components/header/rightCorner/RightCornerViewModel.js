//
const rightCornerViewModel = (props, ctx) => {
    const { cartCtx } = ctx;

    const totalCart = () => {
        return cartCtx.totalCart();
    };

    return { totalCart };
};

export { rightCornerViewModel };