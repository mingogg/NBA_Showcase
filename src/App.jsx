import { Routes, Route, useLocation} from 'react-router-dom';
import { useEffect } from "react";
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import TeamsPage from './components/TeamsPage.jsx';
import TeamDetail from './components/TeamDetail.jsx';
import LiveGames from './components/LiveGames.jsx';
import About from './components/About.jsx';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [location.pathname]);

  return (
    <div className="">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/teams' element={<TeamsPage />} />
          <Route path='/teams/:id' element={<TeamDetail />} />
          <Route path='/live' element={<LiveGames />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<h2 className='p-6 text-xl'>Page not found</h2>} />
        </Routes>
    </div>
  );
}

export default App;
