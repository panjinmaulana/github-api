import React from "react";

export default function CardUser({ user }) {
  return (
    <div className="text-center mt-3">
      <h5>Profile</h5>
      <div class="card mx-auto" style={{ width: "18rem", border: "none" }}>
        <img
          src={user.avatar_url}
          className="card-img-top rounded-circle"
          alt={user.login}
        />
        <div class="card-body">
          <h5 class="card-title text-center">{user.name || user.login}</h5>
          <div className="d-flex">
            <p>{user.public_repos} Repositories</p>
            <p>{user.followers} Followers</p>
            <p>{user.following} Following</p>
          </div>
        </div>
      </div>
    </div>
  );
}
