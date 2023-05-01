import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "../App";

const testStoryOne = {
  title: [
    {
      type: "string",
      value: "Being a Dad",
    },
  ],
  contents: [
    {
      type: "string",
      value: "One of the best things about being a dad are the ",
    },
    {
      type: "plural_noun",
      value: "balls",
    },
    {
      type: "string",
      value:
        ". People don’t talk about that very much. But, man, I love kids. Without them, life would be like a(n) ",
    },
    {
      type: "adjective",
      value: "bad",
    },
    {
      type: "string",
      value: " ",
    },
    {
      type: "noun",
      value: "cat",
    },
    {
      type: "string",
      value: ". Though it's not always easy. Sometimes they do make you feel ",
    },
    {
      type: "adjective",
      value: "gruff",
    },
    {
      type: "string",
      value: ".",
    },
  ],
};

describe("App header renders", () => {
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
});

describe("Integrated testing", () => {
  describe("Word entry page renders after clicking 'Start Adding Words!' button", () => {
    test("Word form renders after clicking 'Start Adding Words!' button from start page", async () => {
      render(<App />);
      const button = screen.getByText("Start Adding Words!");
      await userEvent.click(button);

      const form = screen.findByRole("form");
      expect(form).toBeDefined();
    });
    test("New header renders after clicking 'Start Adding Words!' button from start page", async () => {
      render(<App />);
      const button = screen.getByText("Start Adding Words!");
      await userEvent.click(button);

      const headerTitle = screen.findByText("Add Words");
      expect(headerTitle).toBeDefined();
    });
  });
  describe("Story page renders properly after adding words", () => {
    test("'Generate Story!' renders after words added", async () => {
      render(<App />);
      const button = screen.getByText("Start Adding Words!");
      await userEvent.click(button);

      const input = screen.getByRole("textbox");

      await userEvent.type(input, "balls");

      const addWordButton = screen.getByText("Add Word");

      await userEvent.click(addWordButton);
      await userEvent.type(input, "bad");
      await userEvent.click(addWordButton);
      await userEvent.type(input, "cat");
      await userEvent.click(addWordButton);
      await userEvent.type(input, "gruff");
      await userEvent.click(addWordButton);

      const generateStoryButton = screen.findByText("Generate Story!");
      expect(generateStoryButton).toBeDefined();
    });
    test("Story page renders after 'Generate Story!' button clicked", async () => {
      render(<App />);
      const button = screen.getByText("Start Adding Words!");
      await userEvent.click(button);

      const input = screen.getByRole("textbox");

      await userEvent.type(input, "balls");

      const addWordButton = screen.getByText("Add Word");

      await userEvent.click(addWordButton);
      await userEvent.type(input, "bad");
      await userEvent.click(addWordButton);
      await userEvent.type(input, "cat");
      await userEvent.click(addWordButton);
      await userEvent.type(input, "gruff");
      await userEvent.click(addWordButton);

      const generateStoryButton = screen.getByText("Generate Story!");
      await userEvent.click(generateStoryButton);

      const storyTitle = screen.getByText("Being a Dad");
      expect(storyTitle).toBeDefined();
    });
    test("Story page renders with all chosen words after 'Generate Story!' button clicked", async () => {
      render(<App />);
      const button = screen.getByText("Start Adding Words!");
      await userEvent.click(button);

      const input = screen.getByRole("textbox");

      await userEvent.type(input, "balls");

      const addWordButton = screen.getByText("Add Word");

      await userEvent.click(addWordButton);
      await userEvent.type(input, "bad");
      await userEvent.click(addWordButton);
      await userEvent.type(input, "cat");
      await userEvent.click(addWordButton);
      await userEvent.type(input, "gruff");
      await userEvent.click(addWordButton);

      const generateStoryButton = screen.getByText("Generate Story!");
      await userEvent.click(generateStoryButton);

      const balls = screen.getByText("balls");
      const bad = screen.getByText("bad");
      const cat = screen.getByText("cat");
      const gruff = screen.getByText("gruff");

      expect(balls).toBeDefined();
      expect(bad).toBeDefined();
      expect(cat).toBeDefined();
      expect(gruff).toBeDefined();
    });
  });

  // test("Button changes page to word entry page when clicked", async () => {
  //   render(<App />);

  //   const button = screen.getByText("Start Adding Words!");

  //   await userEvent.click(button);
  //   const addWordButton = screen.findByText("Add Word");
  //   expect(addWordButton).toBeDefined();

  //   const buttonAgain = screen.queryByText("Start Adding Words!");
  //   expect(buttonAgain).toBeNull();
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

  //
  //   });
});
