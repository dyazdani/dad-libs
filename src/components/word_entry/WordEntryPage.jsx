export default function WordEntryPage({chosenWords, wordTypes, handleAddWordClick, handleGenerateStoryClick}) {
    let currentWordType = wordTypes[chosenWords.length];

    if (chosenWords.length < wordTypes.length) {
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