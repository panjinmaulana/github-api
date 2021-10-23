import React, { useState, useEffect } from "react";
import Alert from "./Alert";
import CardUser from "./CardUser";
import Loading from "./Loading";
import Repo from "./Repo";

export default function FormSearch() {
  const [searchInput, setSearchInput] = useState("");
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);
  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    config("example");
  }, []);

  function handleChange(e) {
    if (e.target) {
      setError(null);
      setSearchInput(e.target.value);
    }
  }

  function handleClick(e) {
    e.preventDefault();
    if (!searchInput) {
      setError("Please input username github..");
    } else {
      setMessage(null);
      config(searchInput);
    }
  }

  function config(searchInput) {
    fetch(`https://api.github.com/users/${searchInput}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          setMessage(data.message);
        } else {
          setUser(data);
          setLoadingUser(false);
        }
      })
      .catch((err) => console.log(err));

    fetch(`https://api.github.com/users/${searchInput}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setRepos(data);
        setLoadingRepos(false);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <form className="d-flex mx-auto mt-3" style={{ width: "50%" }}>
        <input
          type="text"
          className="form-control me-2"
          placeholder="Username github ex:panjinmaulana"
          onChange={(e) => handleChange(e)}
        />
        <button className="btn btn-primary" onClick={(e) => handleClick(e)}>
          Search
        </button>
      </form>
      {error ? (
        <Alert error={error} />
      ) : loadingUser && loadingRepos ? (
        <Loading />
      ) : message ? (
        <p className="text-center mt-5">{message}</p>
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
