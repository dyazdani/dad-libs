import StoryPage from "../components/story/StoryPage";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import getStoryWithBlanks from "../testUtils";

const story = getStoryWithBlanks(false, []);
const storyTwo = getStoryWithBlanks(false, ["grapes"]);

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
    render(<StoryPage story={storyTwo} />);

    const chosenWord = screen.getByText("grapes");

    expect(chosenWord).toBeDefined();
  });
});
