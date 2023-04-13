export default function Header({ subheadings, pages, activePage }) {
  const subheading = () => {
    switch (activePage) {
      case pages.START:
        return subheadings.START;
      case pages.WORD_ENTRY:
        return subheadings.WORD_ENTRY;
      case pages.STORY:
        return subheadings.STORY;
      default:
        throw new error("Invalid page");
    }
  };

  return (
    <>
      <h2>Dad Libs</h2>
      <h3>{subheading()}</h3>
    </>
  );
}
