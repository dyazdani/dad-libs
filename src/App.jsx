import React from 'react';
import Header from './Header';
import Button from './Button';
import { useState } from "react";

const App = () => {
    const [clickCount, setclickCount] = useState(0);

    function handleClick(_e) {
        setclickCount(clickCount + 1);
        console.log('click!');
    }

    return (
    <div>
        <Header clickCount={clickCount}></Header>
        <Button onClick={handleClick}></Button>
    </div>
    )
}

export default App;