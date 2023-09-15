import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import Form from "../Form/Form";
import Guesses from "../Guesses/Guesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [answer, setAnswer] = React.useState("");
    const [guesses, setGuesses] = React.useState([]);

    return (
        <>
            <Guesses guesses={guesses} />
            <Form
                answer={answer}
                setAnswer={setAnswer}
                guesses={guesses}
                setGuesses={setGuesses}
            />
        </>
    );
}

export default Game;
