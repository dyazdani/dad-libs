import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import WordEntryPage from "../components/word_entry/WordEntryPage";
import App from "../App";

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
      value: "Being mad is like being ",
    },
    {
      type: "adjective",
      value: null,
    },
    {
      type: "string",
      value:
        ". People don’t talk about that very much. When you're mad, you're like a(an) ",
    },
    {
      type: "noun",
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

const handleGenerateStoryClick = () => {
  render(<StoryPage story={story} />);
};

describe("Word Entry Page", () => {
  test("input receives text and text disappears after add word button clicked", async () => {
    render(<WordEntryPage story={story} handleSubmit={handleSubmit} />);

    const input = screen.getByPlaceholderText("Enter word here");
    await userEvent.type(input, "loud");

    expect(input).toHaveValue("loud");
    const addWordButton = screen.getByRole("button");
    await userEvent.click(addWordButton);
    expect(input).toHaveValue("");
  });
  // TODO: troubleshoot for these tests
  //   test("Label renders on load of word entry page and after add word button clicked", () => {
  //   });
  //   test("Generate story button renders after all words have been entered", async () => {
  //     render(
  //       <WordEntryPage
  //         story={story}
  //         handleSubmit={handleSubmit}
  //         handleGenerateStoryClick={handleGenerateStoryClick}
  //       />
  //     );

  //     const input = screen.getByPlaceholderText("Enter word here");
  //     await userEvent.type(input, "loud");

  //     const addWordButton = screen.getByRole("button");
  //     await userEvent.click(addWordButton);

  //     await userEvent.type(input, "bad");
  //     await userEvent.click(addWordButton);

  //     await userEvent.type(input, "cat");
  //     await userEvent.click(addWordButton);

  //     console.log(story);
  //     await userEvent.type(input, "dogs");
  //     await userEvent.click(addWordButton);

  //     const generateStoryButton = screen.findByText("Generate Story!");
  //     expect(generateStoryButton).toBeDefined();
  //   });
});
