import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "../App";
import Header from "../components/common/Header";
import StartPage from "../components/start/StartPage";
import StoryPage from "../components/story/StoryPage";
import WordEntryPage from "../components/word_entry/WordEntryPage";

describe("Start page", () => {
  test("Correct text displayed in header", () => {
    render(<App />);
    const header = screen.getByText("Dad Libs");
    expect(header).toBeDefined();
  }),
    test("Correct text displayed in subheader", () => {
      render(<App />);

      const subheader = screen.getByText(
        "Ad lib a story about dads, dadding, and dad-tastic shenanigans"
      );

      expect(subheader).toBeDefined();
    });
  test("Button renders with correct text", () => {
    render(<App />);

    const button = screen.getByText("Start Adding Words!");

    expect(button).toBeDefined();
  });
  test("Button changes page to word entry page when clicked", async () => {
    render(<App />);

    const button = screen.getByText("Start Adding Words!");

    userEvent.click(button);
    const addWordButton = await screen.findByText("Add Word");
    expect(addWordButton).toBeDefined();

    const buttonAgain = screen.queryByText("Start Adding Words!");
    expect(buttonAgain).toBeNull();
  });
});

describe("Integrated testing", () => {
  test("input renders after clicking from start page", async () => {
    render(<App />);
    const button = screen.getByText("Start Adding Words!");
    userEvent.click(button);

    const input = await screen.findByRole("textbox");
    expect(input).toBeDefined();
  });
  // test("", () => {
  //   render(<App />);
  // });

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
