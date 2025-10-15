import React from "react";

const List = () => {
  const items = ["React", "Vite", "JavaScript", "CSS"];
  return (
    <div>
      <h2>My Skills</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
