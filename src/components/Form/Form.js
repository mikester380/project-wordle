import React from "react";

function Form(props) {
    function handleSubmit() {
        console.log(props.answer);
        props.setAnswer("");
    }

    function updateAnswer(event) {
        const answer = event.target.value;
        props.setAnswer(answer.toUpperCase());
    }

    const markup = (
        <form class="guess-input-wrapper" onSubmit={handleSubmit}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                type="text"
                id="guess-input"
                value={props.answer}
                onChange={updateAnswer}
            />
        </form>
    );

    return markup;
}

export default Form;
