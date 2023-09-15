import React from "react";
import { range } from "../../utils";

function Guess(props) {
    const markup = (
        <p className="guess">
            {range(5).map((_, index) => (
                <span className="cell" key={index}>
                    {props.guess ? props.guess.content[index] : ""}
                </span>
            ))}
        </p>
    );

    return markup;
}

export default Guess;
