import React, {useState} from 'react';
import './App.css';
import ProductTable from "./ProductTable";
import CartItem from "./CartItem";

const ShoppingCartFullComponent: React.FC<{ uuids: [] }> = (props: { uuids: [] }) => {

    const [state, setState] = useState<boolean>(false);
    const [keys, setKeys] = useState<[string, any][]>([]);

    const reRenderAfterClear = () => {
        localStorage.clear();
        setState(state);
    };

    if (!state) {
        return (
            <>
                <h1 className={"prod-table-header"}>Shopping Cart</h1>
                {props.uuids.map((product: string) => {
                    console.log(product);
                    //@ts-ignore
                    return <CartItem name={localStorage.getItem(product[0])}/>;
                })
                }
                <div >
                    <button className={"go-home-button"}>BUY!</button>
                </div>
                <div className={"cart-full-button"}>
                    <button onClick={() => setState(true)}>Return to products</button>
                </div>
                <div className={"cart-full-button"}>
                    <button onClick={() => reRenderAfterClear()}>Clear shopping cart</button>
                </div>
            </>
        );
    } else {
        return <ProductTable/>
    }
};

export default ShoppingCartFullComponent;
