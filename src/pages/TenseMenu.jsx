import { Link } from "react-router-dom"

export default function TenseMenu() {
  return (
    <div className="center-box">
      <h2>Select Tense Quiz</h2>

      <div className="grid">
        <Link className="btn" to="/tenses/present-indefinite">Present Indefinite</Link>
        <Link className="btn" to="/tenses/present-continuous">Present Continuous</Link>
        <Link className="btn" to="/tenses//present-perfect">Present Perfect</Link>
        <Link className="btn" to="/tenses/past-indefinite">Past Indefinite</Link>
        <Link className="btn" to="/tenses/future-indefinite">Future Indefinite</Link>
      </div>

      <Link to="/" className="back-btn">Back to Home</Link>
    </div>
  )
}
