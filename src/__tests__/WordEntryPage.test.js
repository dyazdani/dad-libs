import React from "react";
import { useState } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import WordEntryPage from "../components/word_entry/WordEntryPage";
import App from "../App";

let word = null;

let story = {
  title: [
    {
      type: "string",
      value: "Being Mad",
    },
  ],
  contents: [
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
        ". People don’t talk about that very much. When you're mad, you're a(an) ",
    },
    {
      type: "adjective",
      value: null,
    },
    {
      type: "string",
      value: " ",
    },
    {
      type: "noun",
      value: null,
    },
    {
      type: "string",
      value: ". But being mad is better than having to eat a bucket of ",
    },
    {
      type: "plural_noun",
      value: null,
    },
    {
      type: "string",
      value: ".",
    },
  ],
};

function cloneStory(story) {
  const newStory = {};
  newStory.title = story.title.map((entry) => ({ ...entry }));
  newStory.contents = story.contents.map((entry) => ({ ...entry }));
  return newStory;
}

const handleSubmit = (word) => {
  const newStory = cloneStory(story);
  const newContents = newStory.contents;
  const currentStorySlotIndex = newContents.findIndex(
    (object) => object.value === null
  );
  newContents[currentStorySlotIndex].value = word;
  const finalStory = { title: newStory.title, contents: newContents };
  story = finalStory;
};

describe("Word Entry Page", () => {
  test("input renders after clicking from start page", async () => {
    render(<App />);
    const button = screen.getByText("Start Adding Words!");
    userEvent.click(button);

    const input = await screen.findByRole("textbox");
    expect(input).toBeDefined();
  });
  test("input receives text and text disappears after add word button clicked", async () => {
    render(<WordEntryPage story={story} handleSubmit={handleSubmit} />);

    const input = screen.getByPlaceholderText("Enter word here");
    console.log(input);
    await userEvent.type(input, "loud");

    expect(input).toHaveValue("loud");
    const addWordButton = screen.getByRole("button");
    await userEvent.click(addWordButton);

    expect(input).toHaveValue("");
  });
});
