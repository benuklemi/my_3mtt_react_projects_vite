import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Counter Application</h1>
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increament
        </button>
        <p>
           <button onClick={() => setCount((count) => count + 1)}>
         {count}
        </button>
        </p>
        <p>
           <button onClick={() => setCount((count) => count - 1)}>
          Decreament
        </button>
        </p>
      </div>
    
    </>
  )
}

export default App
