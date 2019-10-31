import './App.css';
import React, {useEffect, useState} from 'react';


const DescriptionComponent: React.FC<{ description: string }> = (props) => {

    const [data, setData] = useState<string[]>([""]);

    useEffect(() => {
        setData(props.description.split('|'));
    }, []);

    return (
        <>
            {data.map((datum: string) => {
                return <pre className={"desc-pre"}>{datum}</pre>
            })}
        </>
    );
};

export default DescriptionComponent;

