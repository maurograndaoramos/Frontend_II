import { useRef } from "react"


const FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    return (
        <div>
            <input type = "text" ref = {inputRef} />
            <br />
            <br />
            <button onClick = {() => inputRef.current?.focus()}>Focar</button>
        </div>
    )
}

export default FocusInput