import React from "react";
// import { Link, useLocation } from "react-router-dom";

function Footer() {
    // We'll go into the Hooks API later, for now, we are just using some code
    // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
    // This allows the component to check the route any time the user uses a link to navigate.
    // const location = useLocation();

    var style = {
        backgroundColor: "#F8F8F8",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%",
    }

    var phantom = {
        display: 'block',
        padding: '20px',
        height: '60px',
        width: '100%',
    }

    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                "Creativity is intelligence having fun." -- Albert Einstein
            </div>
        </div>
    )
}

export default Footer;
