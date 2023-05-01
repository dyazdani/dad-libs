import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import WordEntryPage from "../components/word_entry/WordEntryPage";
import getStoryWithBlanks from "../testUtils";
import WordForm from "../components/word_entry/WordForm";

const handleGenerateStoryClick = () => {
  render(<StoryPage story={story} />);
};

const story = getStoryWithBlanks(false, []);

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
