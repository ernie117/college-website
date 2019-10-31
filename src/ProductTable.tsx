import React, {useState} from 'react';
import './App.css';
import pro from './ipad-pro.jpg'
import samsung from './samsung.jpg'
import surface from './pro.jpg'
import Popup from "reactjs-popup";


const ProductTable: any = () => {

    const [state, setState] = useState<boolean>(false);

    const showPopup: () => any = () => {
    };

    if (!state) {
        return (
            <div className={"prod-table-div"}>
                <table className={"center-table"}>
                    <th className={"th-prod"}><u>Product</u></th>
                    <th className={"th-prod"}><u>Description</u></th>
                    <th className={"th-prod"}><u>Image</u></th>
                    <tbody>
                    <tr className={"prod-tab-row"}>
                        <td className={"prod-tab-d"}><u>Apple iPad Pro 11</u></td>
                        <td className={"prod-tab-d"}>Dimensions: 247.6 x 178.5 x 5.9 mm | OS: iOS 12 | Screen size:
                            11-inch
                            | CPU: A12X Bionic | Storage: 64GB/256GB/512GB/1TB | Battery: 7,812mAh
                        </td>
                        <td className={"prod-tab-d"}><img onClick={() => setState(true)} className={"tab-img"}
                                                          src={pro}/></td>
                    </tr>
                    <tr className={"prod-tab-row"}>
                        <td className={"prod-tab-d"}><u>Samsung Galaxy Tab S6</u></td>
                        <td className={"prod-tab-d"}>Dimensions: 244.5 x 159.5 x 5.7 mm | OS: Android 9 | Screen size:
                            10.5-inch CPU: Snapdragon 855 | Storage: 128GB/256GB Battery: 7,040mAh
                        </td>
                        <td className={"prod-tab-d"}><img className={"tab-img"} src={samsung}/></td>
                    </tr>
                    <tr className={"prod-tab-row"}>
                        <td className={"prod-tab-d"}><u>Microsoft Surface Pro</u></td>
                        <td className={"prod-tab-d"}>Dimensions: 292 x 201 x 8.5mm | OS: Windows 10 Pro | Screen size:
                            12.3-inch CPU: Intel Core m3, i5 or i7 | Storage: 128GB/256GB/512GB/1TB | Battery: up to
                            13.5
                            hours video playback
                        </td>
                        <td className={"prod-tab-d"}><img className={"tab-img"} src={surface}/></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    } else {
        return (
            <Popup modal closeOnDocumentClick>
                <h1>Some stuff</h1>
            </Popup>
        )
    }
};

export default ProductTable;
