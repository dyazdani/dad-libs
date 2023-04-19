import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "../App";
import Header from "../components/common/Header";
import StartPage from "../components/start/StartPage";
import StoryPage from "../components/story/StoryPage";
import WordEntryPage from "../components/word_entry/WordEntryPage";
