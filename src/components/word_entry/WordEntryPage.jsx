export default function WordEntryPage({chosenWords, wordTypeList, handleAddWordClick, handleGenerateStoryClick}) {
    let currentWordType = wordTypeList[chosenWords.length];

    if (chosenWords.length < wordTypeList.length) {
        return (
            <div>
                <label htmlFor="word">{currentWordType}: </label>
                <input type="text" id="word" name="word"></input>
                <button type="button" onClick={handleAddWordClick}>Add Word</button>
            </div>

        )
    } else {
        return (
            <button type="button" onClick={handleGenerateStoryClick}>Generate Story!</button>
        )
    }
    
}