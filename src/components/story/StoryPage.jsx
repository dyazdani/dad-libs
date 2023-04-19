export default function StoryPage({ story }) {
  const { contents, title } = story;

  return (
    <>
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
    </>
  );
}
