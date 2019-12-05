import './App.css';
import React, {useEffect, useState} from 'react';
import DescriptionComponent from "./DescriptionComponent";
import ProductTable from "./ProductTable";


const MainProductComponent: React.FC<{name: string, description: string, image: string}> = (props: { name: string, description: string, image: string }) => {

    const [show, setShow] = useState<any>(true);

    if (show) {
        return (
            <div>
                <div className={"main-prod-container"}>
                    <h2>{props.name}</h2>
                </div>
                <div className={"main-prod-container"}>
                    <DescriptionComponent description={props.description}/>
                </div>
                <div className={"main-prod-container"}>
                    <img src={props.image} alt={""}/>
                </div>
                <div className={"main-prod-container"}>
                    <h1>Price: £300</h1>
                </div>
                <button onClick={() => setShow(false)}>Return</button>
            </div>
        );
    } else {
        return <ProductTable/>
    }
};

export default MainProductComponent;

