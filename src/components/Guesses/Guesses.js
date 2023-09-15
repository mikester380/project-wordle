import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guesses(props) {
    const markup = (
        <div className="guess-results">
            {range(NUM_OF_GUESSES_ALLOWED).map((_, index) => (
                <Guess
                    guess={props.guesses[index]}
                    key={index}
                    answer={props.answer}
                />
            ))}
        </div>
    );

    return markup;
}

export default Guesses;
