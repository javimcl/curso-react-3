import React from 'react';
import ReactDom from "react-dom";

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function Appl(props) {
    return (
        <div>
            <Welcome name="Javier" />,
            <Welcome name="Luis" />,
            <Welcome name="Carlos" />,
        </div>
    )
}

ReactDom.render(
    <Appl />,
    document.getElementById("root")
);
