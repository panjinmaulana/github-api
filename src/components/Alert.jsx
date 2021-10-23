import React from "react";

export default function Alert({ error }) {
  return (
    <div className="mx-auto mt-3" style={{ width: "50%" }}>
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    </div>
  );
}
