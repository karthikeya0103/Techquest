import React from 'react'
import { Link } from "react-router-dom";
import "./App.css";
const about = () => {
  return (
    <div><main>
    <h2>Who are we?</h2>
    <p>
      That feels like an existential question, don't you
      think?
    </p>
  </main>
  <nav>
    <Link to="/">Home</Link>
  </nav></div>
  )
}

export default about