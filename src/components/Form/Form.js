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
                minLength="5"
                maxLength="5"
                value={props.guess}
                onChange={updateGuess}
            />
        </form>
    );

    return markup;
}

export default Form;
