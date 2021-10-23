import React, { useState, useEffect } from "react";
import CardUser from "./CardUser";
import Repo from "./Repo";

export default function FormSearch() {
  const [searchInput, setSearchInput] = useState("");
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    config();
    setSearchInput("example");
  }, []);

  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    config();
  }

  function config() {
    fetch(`https://api.github.com/users/${searchInput}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));

    fetch(`https://api.github.com/users/${searchInput}/repos`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRepos(data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <form className="d-flex mx-auto mt-3" style={{ width: "20%" }}>
        <input
          type="text"
          class="form-control me-2"
          placeholder="Username github"
          onChange={(e) => handleChange(e)}
        />
        <button className="btn btn-primary" onClick={(e) => handleClick(e)}>
          Search
        </button>
      </form>
      {loading ? (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="row">
          <div className="col">
            <CardUser user={user} />
          </div>
          <div className="col">
            <Repo repos={repos} />
          </div>
        </div>
      )}
    </div>
  );
}
