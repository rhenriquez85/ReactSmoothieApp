import thankyou from '../../../images/thank-you.gif'

const checkoutViewModel = (props, ctx, params) => {
    const { checkout, setCheckout, wait, setWait } = params;
    const { cartCtx } = ctx;
    const image = thankyou;
    const thankyouOrder = 'Thank you! Your order will be ready shortly.';

    console.log(checkout);

    const displayOrderLine = () => {
        if (cartCtx.totalCart() === 0 && !checkout)
            return 'Please add an item from our menu.'
        if (wait && !checkout)
            return 'Are you ready to place your order?'
        if (!checkout)
            return 'Would you like to place your order?';

        return 'Thank you! Your order will be ready shortly.';
    }

    const placeOrder = () => {
        setCheckout(true);
    }

    const waitOrder = () => {
        setWait(true);
    }

    return { image, thankyouOrder, displayOrderLine, placeOrder, waitOrder };
};

export { checkoutViewModel };