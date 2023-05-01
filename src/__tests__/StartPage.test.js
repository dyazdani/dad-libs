import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StartPage from "../components/start/StartPage";

test("component renders", () => {
  render(<StartPage />);

  const button = screen.getByRole("button");

  expect(button).toBeDefined();
});
test("button renders with correct text", () => {
  render(<StartPage />);

  const button = screen.getByRole("button");

  expect(button.textContent).toBe("Start Adding Words!");
});
