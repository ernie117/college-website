import React, {useState} from 'react';
import './App.css';
import App from "./App";
import ProductTableHeader from "./ProductTableHeader";
import ProductTableRow from "./ProductTableRow";
import * as Constants from './constants/index'


const ProductTable: React.FC = () => {

    const [homeState, setHomeState] = useState<boolean>(false);

    if (!homeState) {
        return (
            <div className={"prod-table-div"}>
                <h1 className={"prod-table-header"}>Products</h1>
                <table className={"center-table"}>
                    <ProductTableHeader/>
                    <tbody>
                    {Constants.PRODUCTS.map((product: string[]) => {
                        return <ProductTableRow
                                    name={product[0]}
                                    description={product[1]}
                                    img={product[2]}/>
                    })}
                    </tbody>
                </table>
                <button
                    className={"go-home-button"}
                    onClick={() => setHomeState(true)}>
                    Return Home
                </button>
            </div>
        )
    } else {
        return <App/>
    }
};

export default ProductTable;
