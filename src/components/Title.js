import React from "react";

export default function Title(props) {
  return (
    <div>
      <h1 style={{ fontWeight: "bold" }}>{props.text}</h1>
    </div>
  );
}
