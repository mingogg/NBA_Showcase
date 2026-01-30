import { useState } from "react";
import TeamsGrid from "./TeamsGrid.jsx";

function TeamsPage() {
  const [hoveredTeam, setHoveredTeam] = useState(null);

  return (
    <div className="
      relative
      min-h-screen
      pt-20
      ">
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundColor: hoveredTeam
              ? hoveredTeam.primaryColor
              : 'white',
            transition: 'background-color 0.7s ease-in-out',
          }}
        />

      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: hoveredTeam
            ? `radial-gradient(
            circle at bottom right,
            ${hoveredTeam.secondaryColor} 0%,
            ${hoveredTeam.secondaryColor} -100%,
            transparent 80%
          )`
            : 'none',
          opacity: hoveredTeam ? 1 : 0,
          transition: 'background 0.7s ease-in-out, opacity 0.7s ease-in-out',
        }}
      />

      <div className="relative z-30">
        <TeamsGrid
        onHoverCard={setHoveredTeam}
      />
      </div>
    </div>
  );
}

export default TeamsPage;
