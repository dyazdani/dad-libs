import WordForm from "../components/word_entry/WordForm";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import getStoryWithBlanks from "../testUtils";

const story = getStoryWithBlanks(false, []);

const handleSubmit = (word) => {
  const currentStorySlotIndex = story.contents.findIndex(
    (object) => object.value === null
  );
  story.contents[currentStorySlotIndex].value = word;
};

describe("Word Form component renders", () => {
  test("input renders", () => {
    render(<WordForm story={story} handleSubmit={handleSubmit} />);
    console.dir(story);

    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();
  });
});
