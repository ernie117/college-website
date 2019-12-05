import './App.css';
import React, {useState} from 'react';
import Popup from "reactjs-popup";
import DescriptionComponent from "./DescriptionComponent";
import uuid from 'uuid';
import MainProductComponent from "./MainProductComponent";


//@ts-ignore
const ProductTableRow: React.FC<{ updateFunction: any, showFullFunc: any, name: string, description: string, img: string }> = (props) => {

    const [noOfItems, setNoOfItems] = useState<number>(0);
    const [fullProdState, setFullProdState] = useState<boolean>(false);

    const showPopup = (tabletImage: string) => {
        return (
            <div>
                <Popup
                    trigger={<button className="img-buttons"> Show image </button>}
                    modal
                    closeOnDocumentClick
                >
                    <img src={tabletImage} alt={""}/>
                </Popup>
            </div>
        )
    };

    const addToCart = () => {
        const productUUID = uuid.v1();
        localStorage.setItem(productUUID, props.name);
        setNoOfItems(noOfItems + 1);
    };

    const showFullProduct = (name: string, description: string, image: string) => {
        props.showFullFunc(name, description, image);
    };

    if (!fullProdState) {
        return (
            <>
                <tr className={"prod-tab-row"}>
                    <td className={"prod-tab-d"} onClick={() => showFullProduct(props.name, props.description, props.img)}><u>{props.name}</u></td>
                    <td className={"prod-tab-d"}>
                        <DescriptionComponent
                            description={props.description}/>
                    </td>
                    <td className={"prod-tab-d"}>
                        <img className={"tab-img"} src={props.img} alt={""}/>
                        {showPopup(props.img)}
                        <button className={"img-buttons"}
                                onClick={() => addToCart()}>Add to Cart
                        </button>
                    </td>
                </tr>
            </>
        );
    } else {
        return <div/>
    }
};

export default ProductTableRow;
