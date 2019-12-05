import React, {useState} from 'react';
import './App.css';
import App from "./App";
import ProductTableHeader from "./ProductTableHeader";
import ProductTableRow from "./ProductTableRow";
import * as Constants from './constants/index'
import ShoppingCartComponentSmall from "./ShoppingCartSmallComponent";
import ShoppingCartFullComponent from "./ShoppingCartFullComponent";
import MainProductComponent from "./MainProductComponent";


const ProductTable: React.FC = () => {

    const [homeState, setHomeState] = useState<boolean>(false);
    const [showCart, setShowCart] = useState<boolean>(false);
    const [showFullProduct, setShowFullProduct] = useState<boolean>(false);
    const [noOfItems, setNoOfItems] = useState<number>(0);
    const [cartItems, setCartItems] = useState<any>([]);
    const [fullName, setFullName] = useState<string>("");
    const [fullDescription, setFullDescription] = useState<string>("");
    const [fullImage, setFullImage] = useState<string>("");

    const updateShoppingCart = () => {
        setNoOfItems(noOfItems + 1);
        console.log("calling the function");
    };

    const deRenderForFullProduct = (name: string, description: string, image: string) => {
        setFullName(name);
        setFullDescription(description);
        setFullImage(image);
        setHomeState(true);
        setShowCart(false);
        setShowFullProduct(true);
    };

    const deRenderForShoppingCart = () => {
        setHomeState(true);
        setShowCart(true);
        const keys = Object.entries(localStorage);
        setCartItems(keys);
    };

    if (!homeState) {
        return (
            <div>
                <ShoppingCartComponentSmall showShoppingCart={deRenderForShoppingCart} increment={noOfItems}/>
                <div className={"prod-table-div"}>
                    <h1 className={"prod-table-header"}>Products</h1>
                    <table className={"center-table"}>
                        <thead>
                        <ProductTableHeader/>
                        </thead>
                        <tbody>
                        {Constants.PRODUCTS.map((product: string[]) => {
                            return <ProductTableRow
                                updateFunction={updateShoppingCart}
                                showFullFunc={deRenderForFullProduct}
                                key={product[0]}
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
            </div>
        )
    } else if (showCart) {
        // @ts-ignore
        return <ShoppingCartFullComponent uuids={cartItems}/>;
    } else if (showFullProduct) {
        return <MainProductComponent name={fullName} description={fullDescription} image={fullImage}/>
    } else {
        return <App/>
    }

};


export default ProductTable;
