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
