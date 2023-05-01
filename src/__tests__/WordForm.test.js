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

    const input = screen.getByRole("textbox");
    expect(input).toBeDefined();
  });
  test("Add word button renders", () => {
    render(<WordForm story={story} handleSubmit={handleSubmit} />);

    const button = screen.getByRole("button");
    expect(button).toBeDefined();
  });
  test("Add word button renders with 'Add Word' text", () => {
    render(<WordForm story={story} handleSubmit={handleSubmit} />);

    const button = screen.getByRole("button");
    expect(button.textContent).toBe("Add Word");
  });
  test("Label renders without snake case", () => {
    render(<WordForm story={story} handleSubmit={handleSubmit} />);

    const label = screen.getByText("plural noun");
    expect(label).toBeDefined();
  });
});

describe("Functions called properly when Add Word button is clicked", () => {
  test("handleSubmit is called", async () => {
    const user = userEvent.setup();

    const handleSubmitObj = {
      onButtonClick() {},
    };
    const spy = jest.spyOn(handleSubmitObj, "onButtonClick");

    render(<WordForm story={story} handleSubmit={spy} />);

    const button = screen.getByRole("button");
    const input = screen.getByRole("textbox");
    await user.type(input, "rats");
    await user.click(button);

    expect(spy).toHaveBeenCalled();
  });
  test("setWord sets word state", async () => {
    const user = userEvent.setup();
    render(<WordForm story={story} handleSubmit={handleSubmit} />);

    const button = screen.getByRole("button");
    const input = screen.getByRole("textbox");
    await user.type(input, "rats");
    await user.click(button);

    expect(story.contents[1].value).toBe("rats");
  });
});
