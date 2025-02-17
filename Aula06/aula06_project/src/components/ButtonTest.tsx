import { useState } from "react";

const ButtonTest = () => {
    const [counter, setCounter] = useState(0);
    
    return (
        <button onClick={() => setCounter(counter + 1)}>
        {counter}
        </button>
    );
}

export default ButtonTest;
