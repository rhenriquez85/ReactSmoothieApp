//
const rightPanelViewModel = (props, ctx) => {
    const { cartCtx } = ctx;
    const cart = { ...cartCtx.cart };
    const items = [];

    for (const item in cart) {
        if (cart[item].amount > 0)
            items.push(cart[item]);
    }

    return { items };
};

export { rightPanelViewModel };