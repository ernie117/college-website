import './App.css';
import React from 'react';


const ProductTableHeader: React.FC = () => {

    return (
        <>
            <th className={"th-prod"}><u>Product</u></th>
            <th className={"th-prod"}><u>Description</u></th>
            <th className={"th-prod"}><u>Image</u></th>
        </>
    );
};

export default ProductTableHeader;
