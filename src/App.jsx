import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Quiz from "./components/Quiz"
import Home from "./pages/Home"
import TenseMenu from "./pages/TenseMenu"
import PresentIndefinite from "./components/PresentIndefinite"
import PresentContinuous from "./components/PresentContinuous"
import PastIndefinite from "./components/PastIndefinite"
import PresentPerfect from "./components/PresentPerfect"
import FutureIndefinite from "./components/FutureIndefinite"



function App() {
  return (
    <Router>
      <Routes>
      <Route path="/ccna" element={<Quiz />} />
        <Route path="/" element={<Home />} />
        <Route path="/tenses" element={<TenseMenu />} />
        <Route path="/tenses/present-indefinite" element={<PresentIndefinite />} />
        <Route path="/tenses/present-continuous" element={<PresentContinuous />} />
        <Route path="/tenses/past-indefinite" element={<PastIndefinite />} />
        <Route path="/tenses/present-perfect" element={<PresentPerfect />} />
        <Route path="/tenses/future-indefinite" element={<FutureIndefinite />} />
      </Routes>
    </Router>
  )
}

export default App
