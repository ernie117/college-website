import React, {useState} from 'react';
import shoppingCart from './cart-icon.png';
import './App.css';

const ShoppingCartComponentSmall: React.FC<{ showShoppingCart: any, increment: number }> = (props: { showShoppingCart: any, increment: number }) => {
    const [noOfPurchases, setNoOfPurchases] = useState<number>(0);

    return (
        <div className={"right-align-cart"}>
            <img src={shoppingCart} alt={""} className="cart-small-icon" onClick={() => setNoOfPurchases(Object.entries(localStorage).length)}/>
            <p className={"cart-icon-p"}>{noOfPurchases}</p>
            <button className={"cart-button"} onClick={() => props.showShoppingCart()}>Shopping Cart</button>
        </div>
    );
};

export default ShoppingCartComponentSmall;
