import React from "react";

function Guesses(props) {
    const guesses = props.guesses.map(function (guess) {
        return {
            content: guess,
            id: Math.random(),
        };
    });

    const markup = (
        <div className="guess-results">
            {guesses.map((guess) => (
                <p className="guess" key={guess.id}>
                    {guess.content}
                </p>
            ))}
        </div>
    );

    return markup;
}

export default Guesses;
