import React from "react";
import Banner from "../Banner";

function WonBanner(props) {
    return (
        <Banner status="happy">
            <p>
                <strong>Congratulations!</strong> Got it in{" "}
                <strong>
                    {props.numOfGuesses}{" "}
                    {props.numOfGuesses > 1 ? "guesses" : "guess"}
                </strong>
                .
            </p>
        </Banner>
    );
}

export default WonBanner;
