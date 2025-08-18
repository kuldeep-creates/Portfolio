// FloatingIcons.jsx
import React from "react";
import "./FloatingIcons.css";

const FloatingIcons = () => {
  const icons = ['🛠️','⚙️','🔧','💻','✨','🖱️','💡','🎯','</>','🤖','📡','🔗','ᯤ','🌐','👀','🔍','⏳'];

  const half = Math.floor(icons.length / 2);

  return (
    <div className="floating-icons-wrapper">
      {/* Pre-filled icons (already mid-lower screen) */}
      {icons.slice(0, half).map((icon, index) => (
        <span
          key={`static-${index}`}
          className="bubble-icon"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 40}vh`, // mid-lower area
            fontSize: `${1.5 + Math.random() * 2}rem`,
            animationDuration: `${20 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 10}s`
          }}
        >
          {icon}
        </span>
      ))}

      {/* Floating icons (come from bottom continuously) */}
      {icons.slice(half).map((icon, index) => (
        <span
          key={`float-${index}`}
          className="bubble-icon"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `-10%`,
            animationDuration: `${20 + Math.random() * 10}s`,
            animationDelay: `${Math.random() * 10}s`,
            fontSize: `${1.5 + Math.random() * 2}rem`
          }}
        >
          {icon}
        </span>
      ))}
    </div>
  );
};

export default FloatingIcons;
