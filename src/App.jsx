import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './components/Device/Device'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Device name="MPhone" price="40000"></Device>
      <Device name="LPhone" price="49000"></Device>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
    </div>
  )
}

export default App
