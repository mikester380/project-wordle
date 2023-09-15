import React from "react";

function Guesses(props) {
    const markup = (
        <div className="guess-results">
            {props.guesses.map((guess) => (
                <p className="guess" key={guess.id}>
                    {guess.content}
                </p>
            ))}
        </div>
    );

    return markup;
}

export default Guesses;
