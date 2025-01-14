import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Form(props) {
    const [guess, setGuess] = React.useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const nextGuesses = [...props.guesses, guess];
        props.setGuesses(nextGuesses);

        const charsStatus = checkGuess(guess, props.answer);

        const usedLetters = props.usedLetters.filter(function (usedLetter) {
            let exists = false;
            charsStatus.forEach(function (charStatus) {
                if (usedLetter.letter === charStatus.letter) {
                    exists = true;
                }
            });

            return !exists;
        });

        const nextUsedLetters = [...usedLetters, ...charsStatus];
        props.setUsedLetters(nextUsedLetters);

        const wonGame = guess === props.answer;
        const maxGuesses = nextGuesses.length === NUM_OF_GUESSES_ALLOWED;

        if (wonGame) {
            props.setWon(true);
            props.setGameOver(true);
        }

        if (!wonGame && maxGuesses) {
            props.setWon(false);
            props.setGameOver(true);
        }

        setGuess("");
    }

    function updateGuess(event) {
        const nextGuess = event.target.value;
        setGuess(nextGuess.toUpperCase());
    }

    const markup = (
        <form className="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                type="text"
                id="guess-input"
                required
                pattern="[a-zA-z]{5}"
                title="5 letter words"
                value={guess}
                onChange={updateGuess}
                disabled={props.gameOver}
            />
        </form>
    );

    return markup;
}

export default Form;
