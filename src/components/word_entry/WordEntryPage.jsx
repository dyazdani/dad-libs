import { useState } from "react";

const removeSnakeCase = (string) => {
  let finalString = string.replace("_", " ");
  finalString = finalString.toUpperCase();
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(word);
          setWord(null);
        }}
      >
        <label htmlFor="word">
          {removeSnakeCase(currentChosenWordTypeObject.type) + ": "}
        </label>
        <input
          onChange={(e) => {
            setWord(e.target.value);
          }}
          type="text"
          id="word"
          name="word"
          value={word || ""}
        ></input>
        <button>Add Word</button>
      </form>
    );
  }
  return (
    <button type="button" onClick={handleGenerateStoryClick}>
      Generate Story!
    </button>
  );
}
