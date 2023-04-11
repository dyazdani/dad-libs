import React from 'react';
import { useState } from 'react';
import Header from './components/common/Header';
import StartPage from './components/start/StartPage';
import StoryPage from './components/story/StoryPage';
import WordEntryPage from './components/word_entry/WordEntryPage';

const wordTypeList = ['Plural Noun', 'Adjective', 'Noun', 'Adjective', 'Plural Body Part', 'Plural Noun', 'Verb Ending in -ing', 'Plural Noun', 'Verb', 'Noun', 'Verb', 'Noun', 'Verb Ending in -ing', 'Plural Noun', 'Celebrity']

const Pages = {
    START: 'start',
    WORD_ENTRY: 'word_entry',
    STORY: 'story'
  }

const App = () => {
    const [activePage, setActivePage] = useState('start');
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
        if (chosenWords.length < wordTypeList.length - 1) {
            addWord();
        } else {
            addWord();
            
        }
    }    

    let pageContent;

    switch(activePage) {
        case Pages.START:
            pageContent = <StartPage handleClick={() => setActivePage('word_entry')}></StartPage>;
            break;
        case Pages.WORD_ENTRY:
            pageContent = <WordEntryPage wordTypeList={wordTypeList} chosenWords={chosenWords} handleAddWordClick={handleAddWordButtonClick} handleGenerateStoryClick={() => setActivePage('story')}></WordEntryPage>
            break;
        case Pages.STORY:
            pageContent = <StoryPage chosenWords={chosenWords} wordTypeList={wordTypeList}></StoryPage>
            break;
        default:
            throw new Error('Invalid page');
    }

    return (
        <>
        <Header></Header>
        {pageContent}
        </>
    );

}

export default App;