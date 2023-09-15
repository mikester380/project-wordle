import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess(props) {
    const guessStatus = checkGuess(props.guess, props.answer);

    const markup = (
        <p className="guess">
            {range(5).map(function (_, index) {
                const cellClass = guessStatus
                    ? `cell ${guessStatus[index].status}`
                    : "cell";

                return (
                    <span className={cellClass} key={index}>
                        {props.guess ? props.guess[index] : ""}
                    </span>
                );
            })}
        </p>
    );

    return markup;
}

export default Guess;
