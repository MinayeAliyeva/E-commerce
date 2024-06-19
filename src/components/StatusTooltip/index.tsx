import React, { useState } from "react";

const CompA: React.FC<{ text: string }> = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleText = () => {
    setExpanded(!expanded);
  };
  return (
    <span
      onClick={toggleText}
      style={{
        display: "inline-block",
        width: expanded ? "auto" : "180px",
        whiteSpace: expanded ? "normal" : "nowrap",
        overflow: expanded ? "visible" : "hidden",
        textOverflow: expanded ? "clip" : "ellipsis",
        cursor: "pointer",
      }}
    >
      {text}
    </span>
  );
};

export default CompA;
