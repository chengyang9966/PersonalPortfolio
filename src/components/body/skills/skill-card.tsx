import React from "react";
import "./skill-card.css";
function SkillCard({
  skill,
}: {
  skill: {
    name: string;
    icon: JSX.Element;
  };
}) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{skill.icon}</div>
      <label className="skill-name">{skill.name}</label>
    </div>
  );
}
export default SkillCard;
