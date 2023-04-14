// cSpell: ignore hahaha dadding tastic rockin

import React from "react";
import { useState } from "react";
import Header from "./components/common/Header";
import StartPage from "./components/start/StartPage";
import StoryPage from "./components/story/StoryPage";
import WordEntryPage from "./components/word_entry/WordEntryPage";

const storyOne = {
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
      value: null,
    },
    {
      type: "string",
      value:
        ". People don’t talk about that very much. But, man, I love kids. Without them, life would be like a(n) ",
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
      value: ". Though it's not always easy. Sometimes they do make you feel ",
    },
    {
      type: "adjective",
      value: null,
    },
    {
      type: "string",
      value: ".",
    },
  ],
};

const Pages = {
  START: "start",
  WORD_ENTRY: "word_entry",
  STORY: "story",
};

const Subheadings = {
  START: "Ad lib a story about dads, dadding, and dad-tastic shenanigans",
  WORD_ENTRY:
    'Enter the type of word indicated, then press the "Add Word" button. Keep adding words until you see the "Generate Story!" button. Press that for your complete dad story.',
  STORY: `Enjoy your rockin' dad story! The words you added are in bold.`,
};

function cloneStory(story) {
  const newStory = {};
  newStory.title = story.title.map((entry) => ({ ...entry }));
  newStory.contents = story.contents.map((entry) => ({ ...entry }));
  return newStory;
}

const App = () => {
  const [activePage, setActivePage] = useState(Pages.START);
  const [story, setStory] = useState(storyOne);

  const handleSubmit = (word) => {
    const newStory = cloneStory(story);
    const newContents = newStory.contents;
    const currentStorySlotIndex = newContents.findIndex(
      (object) => object.value === null
    );
    newContents[currentStorySlotIndex].value = word;
    setStory(newStory);
  };

  return (
    <>
      <Header
        subheadings={Subheadings}
        activePage={activePage}
        pages={Pages}
      ></Header>
      {activePage === Pages.START && (
        <StartPage
          handleClick={() => setActivePage(Pages.WORD_ENTRY)}
        ></StartPage>
      )}
      {activePage === Pages.WORD_ENTRY && (
        <WordEntryPage
          story={story}
          handleSubmit={handleSubmit}
          handleGenerateStoryClick={() => setActivePage(Pages.STORY)}
        ></WordEntryPage>
      )}
      {activePage === Pages.STORY && (
        <StoryPage story={story} chosenWords={chosenWords}></StoryPage>
      )}
    </>
  );
};

export default App;
