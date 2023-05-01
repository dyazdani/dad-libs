import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/common/Header";

describe("Header component renders", () => {
  test("Header element renders", () => {
    render(<Header />);

    const header = screen.getByRole("banner");

    expect(header).toBeDefined();
  });
  test("h1 element renders", () => {
    render(<Header />);

    const headerTitle = screen.getByText("Dad Libs");

    expect(headerTitle).toBeDefined();
  });
  test("paragraph element renders", () => {
    render(<Header />);

    const paragraph = screen.getByText(
      "Ad lib a story about dads, dadding, and dad-tastic shenanigans"
    );

    expect(paragraph).toBeDefined();
  });
});
