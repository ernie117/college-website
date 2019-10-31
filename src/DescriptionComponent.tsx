import './App.css';
import React, {useEffect, useState} from 'react';


const DescriptionComponent: React.FC<{ description: string }> = (props) => {

    const [data, setData] = useState<string[]>([""]);

    useEffect(() => {
        setData(props.description.split('|'));
    }, [props.description]);

    return (
        <>
            {data.map((datum: string) => {
                return <pre key={data.indexOf(datum)} className={"desc-pre"}>{datum}</pre>
            })}
        </>
    );
};

export default DescriptionComponent;

