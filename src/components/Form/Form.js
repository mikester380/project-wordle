import React from "react";

function Form(props) {
    const [guess, setGuess] = React.useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const nextGuesses = [
            ...props.guesses,
            {
                content: guess,
                id: Math.random(),
            },
        ];

        props.setGuesses(nextGuesses);
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
            />
        </form>
    );

    return markup;
}

export default Form;
