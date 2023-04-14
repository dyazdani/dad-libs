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
        {story.contents.map((element, index) => {
          if (element.type !== "string") {
            return (
              <span key={"chosen-word-" + index}>
                <strong>{element.value}</strong>
              </span>
            );
          }
          return <span key={"story-part-" + index}>{element.value}</span>;
        })}
      </p>
    </>
  );
}
