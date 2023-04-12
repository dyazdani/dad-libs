export default function StoryPage({chosenWords, story}) {
    const {segments, title, startsWithChosenWord} = story;

    const titleElement = <h4>{title}</h4>;
    const storySegmentsInElements = segments.map((part, index) => {
        return (
            <span key={'segment-' + index}>{part}</span>
        );
    });

    const chosenWordsInElements = chosenWords.map((word, index) => {
        return (
            <span key={'chosen-word-' + index}><strong>{word}</strong></span>
        );
    });

    function makeStory() {
        let finalStory = [];
        if (startsWithChosenWord) {
            for (let i = 0; i < chosenWordsInElements.length; i++) {
                finalStory.push(chosenWordsInElements[i]);
                finalStory.push(storySegmentsInElements[i]);
            } 
        } else {
            for (let i = 0; i < chosenWordsInElements.length; i++) {
                finalStory.push(storySegmentsInElements[i]);
                finalStory.push(chosenWordsInElements[i]);
            } 
            finalStory.push(storySegmentsInElements[storySegmentsInElements.length - 1]);
        }        
        finalStory.unshift(titleElement);

        return finalStory;
    }


    return (
        <p>
            {makeStory()}
        </p>
    );
}