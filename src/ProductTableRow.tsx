import './App.css';
import React from 'react';
import Popup from "reactjs-popup";
import DescriptionComponent from "./DescriptionComponent";


const ProductTableRow: React.FC<{ name: string, description: string, img: string }> = (props) => {

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

    return (
        <>
            <tr className={"prod-tab-row"}>
                <td className={"prod-tab-d"}><u>{props.name}</u></td>
                <td className={"prod-tab-d"}>
                    <DescriptionComponent
                        description={props.description}/>
                </td>
                <td className={"prod-tab-d"}>
                    <img className={"tab-img"} src={props.img} alt={""}/>
                    {showPopup(props.img)}
                    <button className={"img-buttons"}>Add to Cart</button>
                </td>
            </tr>
        </>
    );
};

export default ProductTableRow;
