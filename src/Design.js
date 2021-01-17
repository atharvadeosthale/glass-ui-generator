import React from "react";
import "./Design.css";

function Design({ blur, color }) {
  return (
    <div className="design">
      <div
        className="design__box"
        style={{
          backdropFilter: `blur(20px)`,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      ></div>
    </div>
  );
}

export default Design;
