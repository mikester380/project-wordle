import React from "react";

function Form(props) {
    function handleSubmit(event) {
        event.preventDefault();

        const nextGuesses = [...props.guesses, props.guess];
        props.setGuesses(nextGuesses);

        props.setGuess("");
    }

    function updateGuess(event) {
        const guess = event.target.value;
        props.setGuess(guess.toUpperCase());
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
                value={props.guess}
                onChange={updateGuess}
            />
        </form>
    );

    return markup;
}

export default Form;
