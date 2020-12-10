import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🙂": "Smiling",
  "😟": "Sad",
  "😎": "Cool",
  "💖": "Love",
  "😲": "Surprised",
  "🙋‍♂️": "Hi there",
  "🤷‍♂️": "What?",
  "👨‍💻": "Coder"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  function emojiHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> Inside outt </h1>

      <input
        placeholder="enter an emoji to know it's meaning.."
        onChange={emojiHandler}
      />

      <div
        style={{ fontStyle: "italic", fontWeight: "bold" }}
        className="meaning"
      >
        Meaning : {meaning}
      </div>
      <h3>emoji we know</h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
