import { useState } from "react";

const removeSnakeCase = (string) => {
  let finalString = string.replace("_", " ");
  return finalString;
};

export default function WordForm({ handleSubmit, story }) {
  const [word, setWord] = useState(null);

  const currentChosenWordTypeObject = story.contents.find(
    (element) => element.value === null
  );

  return (
    <form
      className="word-entry-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(word);
        setWord(null);
      }}
    >
      <label htmlFor="word-entry-input">
        {removeSnakeCase(currentChosenWordTypeObject.type)}
      </label>
      <input
        onChange={(e) => setWord(e.target.value)}
        type="text"
        id="word-entry-input"
        name="word"
        value={word || ""}
      ></input>
      <button>Add Word</button>
    </form>
  );
}
