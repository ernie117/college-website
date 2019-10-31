import './App.css';
import React from 'react';


const ProductTableHeader: React.FC = () => {

    return (
        <tr>
            <th className={"th-prod"}><u>Product</u></th>
            <th className={"th-prod"}><u>Description</u></th>
            <th className={"th-prod"}><u>Image</u></th>
        </tr>
    );
};

export default ProductTableHeader;
