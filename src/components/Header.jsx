import { NavLink } from "react-router-dom";

function Header() {
  const linkClasses = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium transition-colors
    ${isActive? "text-yellow-400" : "text-gray-300 hover:text-white"}`;

  return(
    <header className="
      fixed
      top-0
      left-0
      w-full
      bg-gray-900
      z-50
      ">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
        <NavLink
          to="/"
          className="text-xl font-bold text-white hover:text-yellow-400 transition-colors"
        >
        NBA SHOWCASE
        </NavLink>
        <nav>
          
          <ul className="flex items-center space-x-4">
            <li>
              <NavLink to="/" className={linkClasses}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/teams" className={linkClasses}>
                Teams
              </NavLink>
            </li>
            <li>
              <NavLink to="/live" className={linkClasses}>
                Live
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={linkClasses}>
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
