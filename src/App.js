import HomePage from "./pages/HomePage"
import LandingPage from "./pages/LandingPage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Authorize from "./pages/Authorize"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<Authorize />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    
    </div>
  )
}

export default App
