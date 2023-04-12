import React from 'react';
import { useState } from 'react';
import Header from './components/common/Header';
import StartPage from './components/start/StartPage';
import StoryPage from './components/story/StoryPage';
import WordEntryPage from './components/word_entry/WordEntryPage';

const story = {
    title: `"Being a Dad"`,
    startsWithChosenWord: false,
    segments: [
        'One of the best things about being a dad are the ', 
        `. People don’t talk about that very much. But, man, I love kids. Without them, life would be like a(n) `, 
        ' ', 
        `. Though it's not always easy. Sometimes they do make you feel `,
        '. By that I mean, kids are always sticking their ',
        ' in ',
        ', and ',
        ' their ',
        `, and it's enough to make a dad want to `,
        ' a ',
        '. But you got to love kids. Even when they tell to go ',
        ' a(n) ',
        '. Hahaha…yeah. I admit that living with them is sometimes like ',
        ' ',
        ' with ',
        `, but I wouldn’t trade being a dad for the world.`
    ],
    wordTypes: [
        'Plural Noun',
        'Adjective',
        'Noun', 
        'Adjective',
        'Plural Body Part',
        'Plural Noun',
        'Verb Ending in -ing',
        'Plural Noun',
        'Verb',
        'Noun',
        'Verb',
        'Noun',
        'Verb Ending in -ing',
        'Plural Noun',
        'Celebrity'
    ],
}

const {wordTypes} = story;

const Pages = {
    START: 'start',
    WORD_ENTRY: 'word_entry',
    STORY: 'story'
  }

const Subheadings = {
    START: 'Ad lib a story about dads, dadding, and dad-tastic shenanigans',
    WORD_ENTRY: 'Enter the type of word indicated, then press the "Add Word" button. Keep adding words until you see the "Generate Story!" button. Press that for your complete dad story.',
    STORY: `Enjoy your rockin' dad story! The words you added are in bold.`
}

const App = () => {
    const [activePage, setActivePage] = useState(Pages.START);
    const [chosenWords, setChosenWords] = useState([]);

    // helper function
    function addWord() {
        const input = document.querySelector('input');
        const word = input.value;
        const newChosenWords = [...chosenWords, word];
        setChosenWords(newChosenWords);
        input.value = '';
    }
 
    const handleAddWordButtonClick = (e) => {
        e.preventDefault();        
        if (chosenWords.length < wordTypes.length - 1) {
            addWord();
        } else {
            addWord();
            
        }
    }    

    return (
        <>
            <Header 
                subheadings={Subheadings} 
                activePage={activePage} 
                pages={Pages}>
            </Header>
            {activePage === Pages.START && 
                <StartPage 
                    handleClick={() => setActivePage(Pages.WORD_ENTRY)}>
                </StartPage>}
            {activePage === Pages.WORD_ENTRY && 
                <WordEntryPage 
                    wordTypes={wordTypes} 
                    chosenWords={chosenWords} 
                    handleAddWordClick={handleAddWordButtonClick} 
                    handleGenerateStoryClick={() => setActivePage(Pages.STORY)}>
                </WordEntryPage>}
            {activePage === Pages.STORY && 
                <StoryPage 
                    story={story} 
                    chosenWords={chosenWords}>
                </StoryPage>}
        </>
    );

}

export default App;