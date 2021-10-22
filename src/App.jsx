import React, { useState } from "react";
import "./App.css";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [repos, setRepos] = useState([]);

  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();

    fetch(`https://api.github.com/users/${searchInput}/repos`)
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="App">
      Github API
      <div>
        <input
          type="text"
          placeholder="username github"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={(e) => handleClick(e)}>Search</button>
      </div>
      <div>
        <ul>
          {repos.map((repo, index) => {
            return <li key={index}>{repo.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
