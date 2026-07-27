import React from "react";
import "./SkillCircle.css";

const SkillCircle = ({ skill, percentage, animate, logo }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const progress = animate ? percentage : 0;

  return (
    <div className="circle-container">
      <svg width="120" height="120" className="circle-svg">
        {/* background circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#444"
          strokeWidth="8"
          fill="none"
        />
        {/* animated stroke */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#a1e7f0"
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (progress / 100) * circumference}
          style={{ transition: "stroke-dashoffset 1.5s ease" }}
        />
      </svg>


      <img src={logo} alt={skill} className="circle-logo" />

  
      <div className="circle-text">
        <p>{skill}</p>
        <p>{progress}%</p>
      </div>
    </div>
  );
};

export default SkillCircle;
