const Subheadings = {
  START: "Ad lib a story about dads, dadding, and dad-tastic shenanigans",
  WORD_ENTRY:
    'Enter the type of word indicated, then press the "Add Word" button. Keep adding words until you see the "Generate Story!" button. Press that for your complete dad story.',
  STORY: `Enjoy your rockin' dad story! The words you added are in bold.`,
};

export default function Subheader({ pages, activePage }) {
  const getSubheaderText = () => {
    switch (activePage) {
      case pages.START:
        return Subheadings.START;
      case pages.WORD_ENTRY:
        return Subheadings.WORD_ENTRY;
      case pages.STORY:
        return Subheadings.STORY;
      default:
        throw new error("Invalid page");
    }
  };

  const subheaderText = getSubheaderText();

  return <h2>{subheaderText}</h2>;
}
