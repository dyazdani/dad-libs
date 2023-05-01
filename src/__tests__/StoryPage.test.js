import StoryPage from "../components/story/StoryPage";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import getStoryWithBlanks from "../testUtils";

const story = getStoryWithBlanks(false, []);
const storyWithOneChosenWord = getStoryWithBlanks(false, ["grapes"]);
const storyWithTwoChosenWords = getStoryWithBlanks(false, ["grapes", "glad"]);
const storyWithChosenTitleWord = getStoryWithBlanks(true, [
  "Extra",
  "grapes",
  "glad",
]);

describe("Page renders", () => {
  test("Page instructions render", () => {
    render(<StoryPage story={story} />);

    const instructions = screen.getByText(
      `Enjoy your rockin' dad story! The words you added are highlighted in green.`
    );

    expect(instructions).toBeDefined();
  });
  test("Story title renders", () => {
    render(<StoryPage story={story} />);

    const storyTitle = screen.getByText("Being Mad");

    expect(storyTitle).toBeDefined();
  });
  test("Story contents render", () => {
    render(<StoryPage story={story} />);

    const storyContents = screen.getByText(
      "Being mad is like being attacked by"
    );
    const moreStoryContents = screen.getByText(
      ". People don’t talk about that very much. When you're mad, you're"
    );

    expect(storyContents).toBeDefined();
    expect(moreStoryContents).toBeDefined();
  });
  test("Words chosen by user render within the story", () => {
    render(<StoryPage story={storyWithOneChosenWord} />);

    const chosenWord = screen.getByText("grapes");

    expect(chosenWord).toBeDefined();
  });
  test("Words chosen by user render within the story with two chosen words", () => {
    render(<StoryPage story={storyWithTwoChosenWords} />);

    const grapes = screen.getByText("grapes");
    const glad = screen.getByText("glad");

    expect(grapes).toBeDefined();
    expect(glad).toBeDefined();
  });
  test("Words chosen by user render within the story with a chosen word in the title and two chosen words in story contents", () => {
    render(<StoryPage story={storyWithChosenTitleWord} />);

    const titleWord = screen.getByText("Extra");

    expect(titleWord).toBeDefined();
  });
});
