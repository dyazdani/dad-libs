import StartPage from "./start/StartPage";
import WordEntryPage from "./word_entry/WordEntryPage";
import StoryPage from "./story/StoryPage";

export default function AppContent({chosenWords, wordTypeList, pages, activePage, handleAddWordButtonClick, handleStartAddingWordsButtonClick, handleGenerateStoryClick}) {
    switch(activePage) {
        case pages.START:
            return <StartPage handleClick={handleStartAddingWordsButtonClick}></StartPage>;
        case pages.WORD_ENTRY:
            return <WordEntryPage wordTypeList={wordTypeList} chosenWords={chosenWords} handleAddWordClick={handleAddWordButtonClick} handleGenerateStoryClick={handleGenerateStoryClick}></WordEntryPage>
        case pages.STORY:
            return <StoryPage chosenWords={chosenWords} wordTypeList={wordTypeList}></StoryPage>
        default:
            throw new Error('Invalid page');
    }
}