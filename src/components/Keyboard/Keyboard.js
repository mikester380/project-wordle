import React from "react";

function Keyboard(props) {
    let keyRows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

    function getClassName(key) {
        let keyInfo = props.usedLetters.find((obj) => obj.letter === key);

        if (keyInfo?.status === "correct") {
            return "keyboard__key correct";
        }

        if (keyInfo?.status === "misplaced") {
            return "keyboard__key misplaced";
        }

        if (keyInfo?.status === "incorrect") {
            return "keyboard__key incorrect";
        }

        return "keyboard__key";
    }

    return (
        <section className="keyboard">
            {keyRows.map(function (keys, index) {
                keys = keys.split("");
                return (
                    <div className="keyboard__row" key={index}>
                        {keys.map(function (key, index) {
                            key = key.toUpperCase();
                            const className = getClassName(key);
                            return (
                                <div className={className} key={index}>
                                    {key}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </section>
    );
}

export default Keyboard;
