import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PokePage from './pages/PokePage'
import './App.css'


function App() {
  return (
    // Rotas
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/pokemon/:id" element={<PokePage/>}/>
      </Routes>
    </Router>
  )
}

export default App
