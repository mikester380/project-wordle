import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

import Form from "../Form";
import Guesses from "../Guesses";
import Keyboard from "../Keyboard";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);

// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [guesses, setGuesses] = React.useState([]);
    const [won, setWon] = React.useState(false);
    const [gameOver, setGameOver] = React.useState(false);
    const [usedLetters, setUsedLetters] = React.useState([]);

    return (
        <>
            <Guesses guesses={guesses} answer={answer} />
            <Form
                guesses={guesses}
                setGuesses={setGuesses}
                setWon={setWon}
                gameOver={gameOver}
                setGameOver={setGameOver}
                answer={answer}
                usedLetters={usedLetters}
                setUsedLetters={setUsedLetters}
            />
            <Keyboard usedLetters={usedLetters} answer={answer} />
            {won && <WonBanner numOfGuesses={guesses.length} />}
            {gameOver && !won && <LostBanner answer={answer} />}
        </>
    );
}

export default Game;
