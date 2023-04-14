import { useState } from "react";

export default function WordEntryPage({
  story,
  handleSubmit,
  handleGenerateStoryClick,
}) {
  const [word, setWord] = useState(null);
  if (story.contents.some((element) => element.value === null)) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(word);
          setWord(null);
        }}
      >
        <label htmlFor="word">TODO: CHANGE THIS TO DISPLAY WORD TYPE: </label>
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
