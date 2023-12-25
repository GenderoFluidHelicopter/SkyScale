import React from "react";
import { Link } from 'react-router-dom';
import DocSideBar from './DocSideBar';

export default function Articles() {

return(
<div className="app">
    <DocSideBar />
    <div className="parent">
        <h1>SkyScale documentation</h1>
        <p>Here you can meet with our project's documentation with menu on the left </p>
</div>
</div>
)


}