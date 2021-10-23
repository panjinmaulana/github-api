import React from "react";

export default function CardUser({ user }) {
  return (
    <div className="row">
      <div className="col-lg-3 mx-auto">
        <div class="card mt-3" style={{ width: "18rem", height: "23rem" }}>
          <img
            src={user.avatar_url}
            className="card-img-top rounded-circle"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title text-center">{user.name}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
