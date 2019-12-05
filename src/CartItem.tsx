import './App.css';
import React, {useEffect, useState} from 'react';


const CartItem: React.FC<{name: string}> = (props: { name: string }) => {

    return (
        <div className={"cart-item-p"}>
            <p style={{margin: "5px"}}>{props.name}</p>
        </div>
    );
};

export default CartItem;

