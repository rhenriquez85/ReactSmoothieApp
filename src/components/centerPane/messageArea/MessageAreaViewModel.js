//
const messageAreaViewModel = (props, ctx) => {
    const { pageCtx, cartCtx } = ctx;
    const { title, price, img, menuType, description } = pageCtx.state;
    const data = { title, price, img, menuType, description }

    const addToOrder = () => {
        cartCtx.addToCart(data);
    };

    return { addToOrder, data };
};

export { messageAreaViewModel };