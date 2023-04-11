import Button from "../common/Button";

export default function WordEntryPage({wordTypeList, handleClick}) {
    return (
        <Button onClick={handleClick} buttonText='Add Word'></Button>
    )
}