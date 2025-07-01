import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header.jsx'
import TeamsGrid from './components/TeamsGrid.jsx'
import TeamDetail from './components/TeamDetail.jsx'
import About from './components/About.jsx'

function App() {
  const [hoveredTeam, setHoveredTeam] = useState(null);

  const handleTeamHover = (team) => {
    setHoveredTeam(team);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: hoveredTeam ? hoveredTeam.primaryColor : 'white',
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
        <Header />
        <Routes>
          <Route path='/NBA_Showcase' element={<TeamsGrid onHoverCard={handleTeamHover} />} />
          <Route path='/NBA_Showcase/teams/:id' element={<TeamDetail />} />
          <Route path='/NBA_Showcase/about' element={<About />} />
          <Route path='*' element={<h2 className='p-6 text-xl'>Page not found</h2>} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
