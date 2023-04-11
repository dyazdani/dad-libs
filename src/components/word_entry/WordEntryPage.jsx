import Button from "../common/Button";

export default function WordEntryPage({wordTypeList, handleClick}) {
    return (
            <form>
                <label></label>
                <input></input>
                <Button onClick={handleClick} buttonText='Add Word'></Button>
            </form>
    )
}