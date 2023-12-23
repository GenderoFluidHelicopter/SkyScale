import React from "react";
import ReactOpenApiRenderer from "@tx-dts/react-openapi-renderer";
import "@tx-dts/react-openapi-renderer/dist/index.css";
import { useEffect, useState } from "react";

const API = () => {
    const [spec, setSpec] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/openapi.json');
                const spec = await response.json();
                setSpec(spec);
            } catch (error) {
                console.error('Error fetching OpenAPI spec:', error);
            }
        };
    
        fetchData();
    }, []);

    if (!spec){
        return(null)
    }
    return (<div className="content">
        <ReactOpenApiRenderer specification={spec}  />
    </div>);
}


export default API;