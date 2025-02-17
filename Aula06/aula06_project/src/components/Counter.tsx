import { useState, useEffect } from 'react'

const Counter = () => {
  const [contador, setContador] = useState(0)
  const [isCounting, setIsCounting] = useState(false)

  useEffect(() => {
    if (!isCounting) return;

    const interval = setInterval(() => {
      setContador(prev => prev + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [isCounting])

  return (
    <div>
      <h1>Counter:</h1>
      <p>{contador}</p>
      <button onClick={() => setContador(0)}>Reset</button>
      <button onClick={() => setIsCounting(!isCounting)}>
        {isCounting ? "Stop" : "Start"}
      </button>
    </div>
  )
}

export default Counter
