import React from "react";
import "./Design.css";

function Design({ blur, color, borderRadius }) {
  return (
    <div className="design">
      <div
        className="design__box"
        style={{
          backdropFilter: `blur(${blur}px)`,
          backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
          borderRadius: borderRadius,
        }}
      ></div>
    </div>
  );
}

export default Design;
