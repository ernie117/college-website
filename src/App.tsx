import React, {useState} from 'react';
import tablet from './ipad.png';
import './App.css';
import ProductTable from "./ProductTable";

const App: React.FC = () => {
    const [state, setState] = useState<boolean>(false);

    if (!state) {
        return (
            <div className={"img-div"}>
                <h1 className={"title-page"}>Tablet Shop</h1>
                <img src={tablet} alt={""} className="center-img"/>
                <div>
                    <button
                        className={"start-button"}
                        onClick={() => setState(true)}>
                        Enter
                    </button>
                </div>
            </div>
        );
    } else {
        return <ProductTable />
    }
};

export default App;
