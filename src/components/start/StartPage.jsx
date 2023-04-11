import Button from "../common/Button"

export default function StartPage({handleClick}) {
    return (
        <div>
            <Button onClick={handleClick} buttonText='Start Adding Words!'>
            </Button>
        </div>
        
    );
}