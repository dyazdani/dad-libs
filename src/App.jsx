import React from 'react';
import { useState } from 'react';
import Header from './components/common/Header';
import StartPage from './components/start/StartPage';
import StoryPage from './components/story/StoryPage';
import WordEntryPage from './components/word_entry/WordEntryPage';
import AppContent from './components/AppContent';

const wordTypeList = ['Plural Noun', 'Adjective', 'Noun', 'Adjective', 'Plural Body Part', 'Plural Noun', 'Verb Ending in -ing', 'Plural Noun', 'Verb', 'Noun', 'Verb', 'Noun', 'Verb Ending in -ing', 'Plural Noun', 'Celebrity']

const Pages = {
    START: 'start',
    WORD_ENTRY: 'word_entry',
    STORY: 'story'
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
        if (chosenWords.length < wordTypeList.length - 1) {
            addWord();
        } else {
            addWord();
            
        }
    }    

    

    return (
        <>
        <Header></Header>
        <AppContent wordTypeList={wordTypeList} chosenWords={chosenWords} handleAddWordButtonClick={handleAddWordButtonClick} handleStartAddingWordsButtonClick={() => setActivePage('word_entry')} handleGenerateStoryClick={() => setActivePage('story')}pages={Pages} activePage={activePage}></AppContent>
        </>
    );

}

export default App;