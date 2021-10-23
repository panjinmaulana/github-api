import React from "react";

export default function Repo({ repos }) {
  return (
    <ul class="list-group mx-auto mt-3" style={{ width: "50%" }}>
      {repos.map((repo) => {
        return (
          <li href={repo.html_url} class="list-group-item">
            {repo.name}
          </li>
        );
      })}
    </ul>
  );
}
