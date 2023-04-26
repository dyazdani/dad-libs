import WordForm from "./WordForm";

export default function WordEntryPage({
  story,
  handleSubmit,
  handleGenerateStoryClick,
}) {
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
        <WordForm handleSubmit={handleSubmit} story={story} />
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
