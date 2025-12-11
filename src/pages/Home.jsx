import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="center-box">
      <h2>Select Quiz Category</h2>

      <div className="grid">
        <Link to="/tenses" className="btn">English Tense Quiz</Link>
        <Link to="/ccna" className="btn">CCNA Switching & Routing Quiz</Link>
      </div>
    </div>
  )
}
