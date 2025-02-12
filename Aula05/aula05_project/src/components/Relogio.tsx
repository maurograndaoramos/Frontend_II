import { useState, useEffect } from "react";

function Relogio() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString())}, 1000)

        return () => 
            clearInterval(interval)
    },[])

    return (
        <div>
            <h1>Relógio</h1>
            <p>{time}</p>
        </div>
    )
}

export default Relogio