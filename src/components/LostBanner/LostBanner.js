import React from "react";
import Banner from "../Banner";

function LostBanner(props) {
    return (
        <Banner status="sad">
            <p>
                Sorry, the correct answer is <strong>{props.answer}</strong>.
            </p>
        </Banner>
    );
}

export default LostBanner;
