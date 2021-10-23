import React from "react";

export default function Repo({ repos }) {
  return (
    <div className="mt-3">
      <h5 className="text-center">Repositories</h5>
      <ul className="list-group" style={{ display: "inline", width: "100%" }}>
        {repos.length &&
          repos.map((repo, index) => {
            return (
              <li key={index} href={repo.html_url} className="list-group-item">
                <div className="d-flex justify-content-between">
                  <p>{repo.name}</p>
                  <p className="fst-italic" style={{ fontSize: "12px" }}>
                    {repo.language}
                  </p>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
