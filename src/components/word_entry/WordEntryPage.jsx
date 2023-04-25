import { useState } from "react";

const removeSnakeCase = (string) => {
  let finalString = string.replace("_", " ");
  return finalString;
};

export default function WordEntryPage({
  story,
  handleSubmit,
  handleGenerateStoryClick,
}) {
  const [word, setWord] = useState(null);

  const currentChosenWordTypeObject = story.contents.find(
    (element) => element.value === null
  );

  if (story.contents.some((element) => element.value === null)) {
    return (
      <>
        <header className="instructions">
          <h3>Add Words</h3>
          <p>
            Enter the type of word indicated, then press the "Add Word" button.
            Keep adding words until you see the "Generate Story!" button.
          </p>
        </header>
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
            placeholder="Enter word here"
          ></input>
          <button>Add Word</button>
        </form>
      </>
    );
  }
  return (
    <>
      <header className="instructions">
        <h3>Press Button</h3>
        <p>Press the button below to generate your dad story.</p>
      </header>
      <button
        className="cta-button"
        type="button"
        onClick={handleGenerateStoryClick}
      >
        Generate Story!
      </button>
    </>
  );
}
