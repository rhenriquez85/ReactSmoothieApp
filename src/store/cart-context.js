import React, { useState } from 'react';

const defaultContext = {
    cart: {},
    setCart: () => {},
};

const CartContext = React.createContext(defaultContext);

const CartContextProvider = (props) => {
    const [cart, setCart] = useState({});
    console.log('cart-context');

    const _editCart = (data) => {
        console.log('context edit');
        const { title, price, amount } = data;
        const newCart = { ...cart };
        const curItem = cart[title];

        if (curItem) {
            if (curItem.amount + amount > 9 || curItem.amount + amount < 0) return;
            curItem.amount += amount;
            newCart[title] = curItem;
        }
        else {
            newCart[title] = { title, price, amount };
        }

        setCart(newCart);
    }

    const addToCart = (data) => {
        if (!data.amount) data.amount = 1; 
        _editCart(data);
    };

    const removeFromCart = (data) => {
        if (!data.amount) data.amount = -1; 
        _editCart(data);
    };

    return (
        <CartContext.Provider value={ { cart, addToCart, removeFromCart } }>
            {props.children}
        </CartContext.Provider>
    )
};

export { CartContextProvider, CartContext };