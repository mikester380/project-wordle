import React from "react";

function Banner(props) {
    const markup = (
        <div className={`banner ${props.status}`}>{props.children}</div>
    );
    return markup;
}

export default Banner;
