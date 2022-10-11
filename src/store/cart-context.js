import React, { useState } from 'react';

const defaultContext = {
    cart: {},
    addToCart: () => {},
    removeFromCart: () => {},
    totalCart: () => {},
    clearCart: () => {},
};

const CartContext = React.createContext(defaultContext);

const CartContextProvider = (props) => {
    const [cart, setCart] = useState({});
    console.log('cart-context');

    const _editCart = (data) => {
        console.log('context edit');
        const { title, amount } = data;
        const newCart = { ...cart };
        const curItem = cart[title];

        if (curItem) {
            if (curItem.amount + amount > 9) return;
            if (curItem.amount + amount < 0) curItem.amount = 0;
            else curItem.amount += amount;
            
            newCart[title] = curItem;
        }
        else {
            newCart[title] = data;
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

    const totalCart = () => {
        return Object.values(cart).reduce((prev, item) => prev + item.price * item.amount , 0);
    };

    const clearCart = () => {
        setCart({});
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalCart, clearCart }}>
            {props.children}
        </CartContext.Provider>
    )
};

export { CartContextProvider, CartContext };