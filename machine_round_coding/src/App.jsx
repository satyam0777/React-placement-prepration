import { useState } from 'react'
import MERNProblems from './components/MERNProblems'
import './App.css'

function App() {
  const [showProblems, setShowProblems] = useState(true)

  return (
    <div className="App">
      <MERNProblems />
    </div>
  )
}

export default App
