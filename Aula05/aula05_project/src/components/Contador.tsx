import { useState, useEffect } from 'react'

const Contador = () => {
    const [time, setCounter] = useState(new Date().toLocaleTimeString())


    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(new Date().toLocaleTimeString())}, 1000)

        return () => 
            clearInterval(interval)
    },[])



    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={() => setShowUser(!showUser)}>{showUser ? "Hide User" : "Show User"}</button>
        </div>
    )
}

export default Contador