import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WordEntryPage from "../components/word_entry/WordEntryPage";
import getStoryWithBlanks from "../testUtils";

const handleGenerateStoryClick = () => {
  render(<StoryPage story={story} />);
};

const story = getStoryWithBlanks(false, []);
const completedStory = getStoryWithBlanks(false, ["cats", "scared"]);

describe("Page renders", () => {
  test("Header title renders", () => {
    render(<WordEntryPage story={story} />);

    const headerTitle = screen.getAllByText("Add Words");

    expect(headerTitle).toBeDefined();
  });
  test("Instructions in header renders", () => {
    render(<WordEntryPage story={story} />);

    const instructions = screen.getAllByText(
      `Enter the type of word indicated, then press the "Add Word" button. Keep adding words until you see the "Generate Story!" button.`
    );

    expect(instructions).toBeDefined();
  });
  test("WordForm component renders", () => {
    render(<WordEntryPage story={story} />);

    const input = screen.getByRole("textbox");

    expect(input).toBeDefined();
  });
});

describe("Page renders button and new header when story is completed", () => {
  test("Generate story button renders", () => {
    render(
      <WordEntryPage
        story={completedStory}
        handleGenerateStoryClick={handleGenerateStoryClick}
      />
    );

    const button = screen.getByText("Generate Story!");

    expect(button).toBeDefined();
  });
  test("New header title (<h3>) renders", () => {
    render(
      <WordEntryPage
        story={completedStory}
        handleGenerateStoryClick={handleGenerateStoryClick}
      />
    );

    const headerTitle = screen.getByText("Press Button");

    expect(headerTitle).toBeDefined();
  });
  test("New instructions in header render", () => {
    render(
      <WordEntryPage
        story={completedStory}
        handleGenerateStoryClick={handleGenerateStoryClick}
      />
    );

    const instructions = screen.getByText(
      "Press the button below to generate your dad story."
    );

    expect(instructions).toBeDefined();
  });
});
