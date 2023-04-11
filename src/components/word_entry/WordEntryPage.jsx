import Button from "../common/Button";

export default function WordEntryPage({chosenWords, wordTypeList, handleAddWordClick, handleGenerateStoryClick}) {
    let currentWordType = wordTypeList[chosenWords.length];

    if (chosenWords.length < wordTypeList.length) {
        return (
            <div>
                <label htmlFor="word">{currentWordType}: </label>
                <input type="text" id="word" name="word"></input>
                <Button onClick={handleAddWordClick} buttonText='Add Word'></Button>
            </div>

        )
    } else {
        return (
            <Button onClick={handleGenerateStoryClick} buttonText="Generate Story!"></Button>
        )
    }
    
}