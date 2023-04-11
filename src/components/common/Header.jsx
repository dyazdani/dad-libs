export default function Header({subheadings, pages, activePage}) {
        
    const subheading = () => {
        if (activePage === pages.START) {
            return subheadings.START;
        } else if (activePage === pages.WORD_ENTRY) {
            return subheadings.WORD_ENTRY;
        } else if (activePage === pages.STORY) {
            return subheadings.STORY;
        } else {
            throw new error('Invalid page');
        }
            
    }

    
    return (
        <>
        <h2>Dad Libs</h2>
        <h3>{subheading()}</h3>
        </>

    )
}