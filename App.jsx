import React, { useState } from "react";

const App = () => {
    const purple = "#8e44ad";
    const [bg, setBg] = useState(purple);
    const [name, setName] = useState("Click Me");

    const bgChange = () => {
        // console.log("Clicked");
        let newBg = "#34495e";
        setBg(newBg);
        setName("Ouch !!");
    };

    return (
        <>
            <div style={{ backgroundColor: bg }}>
                <button onClick={bgChange}>{name}</button>
            </div>
        </>
    );
}

export default App;