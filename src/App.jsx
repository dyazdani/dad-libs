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

    function handleAddWordButtonClick(word) {
        const newChosenWords = [...chosenWords, word];
        setChosenWords(newChosenWords);
    }    


    if (activePage === 'start') {
        return (
            <StartPage handleClick={handleStartPageButtonClick}></StartPage>
        );
    }

    if (activePage === 'word_entry') {
        return (
            <WordEntryPage wordTypeList={wordTypeList} handleClick={handleAddWordButtonClick}></WordEntryPage> //TODO: made handleClick an anonymous func to pass argument
        );
    }

    if (activePage === 'story') {
        return (
            <StoryPage chosenWords={chosenWords}></StoryPage>
        );
    }

}

export default App;