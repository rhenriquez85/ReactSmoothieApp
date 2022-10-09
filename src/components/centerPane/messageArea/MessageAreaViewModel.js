//
const messageAreaViewModel = (props, ctx) => {
    const { pageCtx, cartCtx } = ctx;
    const { title, price } = pageCtx.state;

    const addToOrder = () => {
        cartCtx.addToCart({ title, price });
    };

    return { addToOrder };
};

export { messageAreaViewModel };