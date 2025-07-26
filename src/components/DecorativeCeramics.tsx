import React from "react";

// Array de posiciones y animaciones para mini cerámicas
const ceramics = [
  { style: "top-10 left-10 animate-ceramic-float", delay: "delay-0" },
  { style: "top-1/3 right-20 animate-ceramic-float", delay: "delay-200" },
  { style: "bottom-1/4 left-1/4 animate-ceramic-float", delay: "delay-400" },
  { style: "top-2/3 right-1/3 animate-ceramic-float", delay: "delay-600" },
  { style: "bottom-20 right-10 animate-ceramic-float", delay: "delay-800" },
];

const DecorativeCeramics = () => (
  <div className="fixed inset-0 pointer-events-none z-0">
    {ceramics.map((c, i) => (
      <div
        key={i}
        className={`absolute ${c.style} ${c.delay}`}
        style={{ width: 48, height: 48 }}
      >
        {/* Mini vasija/jarrón SVG */}
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="16" rx="9" ry="7" fill="#fff8f0" stroke="#c97a4b" strokeWidth="2" />
          <rect x="7" y="6" width="10" height="7" rx="5" fill="#fff8f0" stroke="#c97a4b" strokeWidth="2" />
          <path d="M7 13 Q12 20 17 13" stroke="#c97a4b" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
    ))}
  </div>
);

export default DecorativeCeramics;
