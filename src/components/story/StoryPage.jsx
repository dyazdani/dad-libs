const story = ['One of the best things about being a dad are the ', `. People don’t talk about that very much. I love kids. Without them, life would be a(n) `, ' ', '. Though sometimes they drive you ', '. By that I mean, kids are always sticking their ', ' in ', ', and ', ' ', ', and its enough to make a dad want to ', ' his ', '. But you got to love kids. Even when they tell to go ', ' a(n) ', '. Hahaha…yeah. I admit that living with them is sometimes like ', ' ', ' with ', `, but I wouldn’t trade being a dad for the world.`]

export default function StoryPage({chosenWords}) {
    const storyDividedInElements = story.map((part, index) => {
        return (
            <span key={index}>{part}</span>
        );
    });

    const chosenWordsInElements = chosenWords.map((word, index) => {
        return (
            <span key={index}><strong>{word}</strong></span>
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