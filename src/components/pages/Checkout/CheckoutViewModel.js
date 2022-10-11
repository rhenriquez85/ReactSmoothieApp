import thankyou from '../../../images/thank-you.gif'

const checkoutViewModel = (props, ctx, params) => {
    const { checkout, setCheckout, wait, setWait } = params;
    const image = thankyou;

    const displayOrderLine = () => {
        if (wait && !checkout)
            return 'What else would you like to add?'
        return checkout ? 'Thank you! Your order will be ready shortly.' : 'Would you like to place your order?';
    }

    const placeOrder = () => {
        setCheckout(true);
    }

    const waitOrder = () => {
        setWait(true);
    }

    return { image, displayOrderLine, placeOrder, waitOrder };
};

export { checkoutViewModel };