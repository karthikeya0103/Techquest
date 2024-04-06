import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      setLoggedIn(true);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="App-header">
      {loggedIn ? (
        <div className="App-header">
          <h1>What kind of therapy are you looking for?</h1>
          <div className="buttondiv">
            <Link to="myself" className="btn btn-primary custombutton">
              For myself
            </Link>
            <Link
              to="relationshipp"
              className="btn btn-primary custombutton"
            >
              Relationship
            </Link>
            <Link to="children" className="btn btn-primary custombutton">
              Children
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3>Welcome to mental health survey!</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Start
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default App;
