export default function StoryPage({ story }) {
  const { contents, title } = story;

  return (
    <>
      <header>
        <h3 id="story-header">
          Enjoy your rockin' dad story! The words you added are highlighted in
          green.
        </h3>
      </header>
      <div className="story-card">
        <h4>
          {story.title.map((element, index) => (
            <span key={"title-" + index}>{element.value}</span>
          ))}
        </h4>
        <p>
          {story.contents.map((element, index) =>
            element.type === "string" ? (
              <span key={"story-part-" + index}>{element.value}</span>
            ) : (
              <strong key={"chosen-word-" + index}>{element.value}</strong>
            )
          )}
        </p>
      </div>
    </>
  );
}
