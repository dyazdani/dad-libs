import React from 'react';
import { useState } from 'react';
import Header from './components/common/Header';
import Button from './components/common/Button';
import StartPage from './components/start/StartPage';
import StoryPage from './components/story/StoryPage';
import WordEntryPage from './components/word_entry/WordEntryPage';

const App = () => {
    const [activePage, setActivePage] = useState('start');

    function handleStartPageButtonClick() {
        setActivePage('word_entry');
    }

    if (activePage === 'start') {
        return (
            <StartPage handleClick={handleStartPageButtonClick}></StartPage>
        );
    }

    if (activePage === 'word_entry') {
        return (
            <WordEntryPage></WordEntryPage>
        );
    }

    if (activePage === 'story') {
        return (
            <StoryPage></StoryPage>
        );
    }

}

export default App;