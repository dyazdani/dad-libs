import React from 'react';
import { useState } from 'react';
import Header from './components/common/Header';
import Button from './components/common/Button';
import StartPage from './components/start/StartPage';
import StoryPage from './components/story/StoryPage';
import WordEntryPage from './components/word_entry/WordEntryPage';

const wordTypeList = ['Plural Noun', 'Adjective', 'Noun', 'Adjective', 'Plural Body Part', 'Plural Noun', 'Verb Ending in -ing', 'Plural Noun', 'Verb', 'Noun', 'Verb', 'Noun', 'Verb Ending in -ing', 'Plural Noun', 'Celebrity']

const App = () => {
    const [activePage, setActivePage] = useState('start');
    const [chosenWords, setChosenWords] = useState([]);

    function handleStartPageButtonClick() {
        setActivePage('word_entry');
    }

    // helper function
    function addWord() {
        const input = document.querySelector('input');
        const word = input.value;
        const newChosenWords = [...chosenWords, word];
        setChosenWords(newChosenWords);
        input.value = '';
    }
    function handleAddWordButtonClick(e) {
        e.preventDefault();        
        if (chosenWords.length < wordTypeList.length - 1) {
            addWord();
        } else {
            addWord();
            
        }

        
    }    

    function handleGenerateStoryButtonClick() {
        setActivePage('story');
    }

    let pageContent;

    if (activePage === 'start') {
        pageContent = <StartPage handleClick={handleStartPageButtonClick}></StartPage>;
    }

    if (activePage === 'word_entry') {
        pageContent = <WordEntryPage wordTypeList={wordTypeList} chosenWords={chosenWords} handleAddWordClick={handleAddWordButtonClick} handleGenerateStoryClick={handleGenerateStoryButtonClick}></WordEntryPage>

    }

    if (activePage === 'story') {
        pageContent = <StoryPage chosenWords={chosenWords} wordTypeList={wordTypeList}></StoryPage>
    }

    return (
        <>
        <Header></Header>
        {pageContent}
        </>
    );

}

export default App;