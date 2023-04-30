import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import WordEntryPage from "../components/word_entry/WordEntryPage";
import App from "../App";
import getStoryWithBlanks from "../testUtils";

const handleGenerateStoryClick = () => {
  render(<StoryPage story={story} />);
};

const story = getStoryWithBlanks(false, []);

describe("Word Entry Page", () => {
  test("input receives text and text disappears after add word button clicked", async () => {
    render(<WordEntryPage story={story} />);

    const input = screen.getByRole("textboxr");
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

export default getStoryWithBlanks;
