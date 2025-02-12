import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function forEachCard() {
  const cards = [
    {
      title: 'Laptop',
      price: 1000
    },
    {
      title: 'Smartphone',
      price: 500
    },
    {
      title: 'Tablet',
      price: 300
    }
  ]

  return cards.map((card, index) => {
    return (
      <Card key={index} title={card.title} price={card.price} />
    )
  })
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
        {forEachCard()} 
      </p>
    </>
  )
}

export default App
