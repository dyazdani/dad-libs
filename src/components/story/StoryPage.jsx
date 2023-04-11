const story = ['One of the best things about being a dad are the ', `. People don’t talk about that very much. But, man, I love kids. Without them, life would be like a(n) `, ' ', `. Though it's not always easy. Sometimes they do make you feel `, '. By that I mean, kids are always sticking their ', ' in ', ', and ', ' their ', `, and it's enough to make a dad want to `, ' a ', '. But you got to love kids. Even when they tell to go ', ' a(n) ', '. Hahaha…yeah. I admit that living with them is sometimes like ', ' ', ' with ', `, but I wouldn’t trade being a dad for the world.`]

export default function StoryPage({chosenWords}) {
    const storyDividedInElements = story.map((part, index) => {
        return (
            <span key={'story-part-' + index}>{part}</span>
        );
    });

    const chosenWordsInElements = chosenWords.map((word, index) => {
        return (
            <span key={'chosen-word-' + index}><strong>{word}</strong></span>
        );
    });

    function makeStory() {
        let finalStory = [];
        for (let i = 0; i < chosenWordsInElements.length; i++) {
            finalStory.push(storyDividedInElements[i]);
            finalStory.push(chosenWordsInElements[i]);
        } 
        finalStory.push(storyDividedInElements[storyDividedInElements.length - 1]);

        return finalStory;
    }


    return (
        <p>
            {makeStory()}
        </p>
    );
}