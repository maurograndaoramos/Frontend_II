import { useRef, useState, useEffect } from "react"

const Contador = () => {
    const [count, setCount] = useState<number>(0)
    const previousCounter = useRef<number>(1)

    useEffect(() => {
        previousCounter.current = count
    }, [count])

    return (
        <div>
            <p>Current: {count}</p>
            <p>Previous: {previousCounter.current}</p>
            <br />
            <button onClick = {() => setCount(count + 1)}>Increase</button>
        </div>
    )
}

export default Contador