import React, { useState } from "react";
import CardUser from "./CardUser";
import Repo from "./Repo";

export default function FormSearch() {
  const [searchInput, setSearchInput] = useState("");
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);

  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();

    fetch(`https://api.github.com/users/${searchInput}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      })
      .catch((err) => console.log(err));

    fetch(`https://api.github.com/users/${searchInput}/repos`)
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((err) => console.log(err));
  }
  return (
    <div>
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
      <div className="d-flex flex-row ">
        <CardUser user={user} />
        <Repo repos={repos} />
      </div>
    </div>
  );
}
