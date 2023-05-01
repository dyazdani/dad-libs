const getStoryWithBlanks = (withBlankInTitle, arrayOfWordsToInsert) => {
  const story = {};

  if (withBlankInTitle === true) {
    story.title = [
      {
        type: "string",
        value: "Being ",
      },
      {
        type: "adjective",
        value: null,
      },
    ];
  } else if (withBlankInTitle === false) {
    story.title = [
      {
        type: "string",
        value: "Being Mad",
      },
    ];
  } else {
    throw new Error("withBlankInTitle argument must be a Boolean value.");
  }

  const contents = [
    {
      type: "string",
      value: "Being mad is like being attacked by",
    },
    {
      type: "plural_noun",
      value: null,
    },
    {
      type: "string",
      value:
        ". People don’t talk about that very much. When you're mad, you're ",
    },
    {
      type: "adjective",
      value: null,
    },
    {
      type: "string",
      value: ".",
    },
  ];

  for (let i = 0; i < arrayOfWordsToInsert.length; i++) {
    const titleObjectWithNullValue = story.title.find(
      (object) => object.value === null
    );
    if (titleObjectWithNullValue) {
      titleObjectWithNullValue.value = arrayOfWordsToInsert[i];
      continue;
    }

    const nextObjectWithNullValue = contents.find(
      (object) => object.value === null
    );
    nextObjectWithNullValue.value = arrayOfWordsToInsert[i];
  }

  story.contents = contents;

  return story;
};

const handleSubmit = jest.fn();

export default getStoryWithBlanks;
