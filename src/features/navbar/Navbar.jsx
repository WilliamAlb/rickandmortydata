import { NavLink } from "react-router-dom";
import routes from "../../util/routes";

// Why the navbar in features folder? Create a components folder
function Navbar() {
  return (
    <nav className="w-screen bg-red-200 flex justify-between items-center h-16 fixed top-0 left-0">
      {/* Its better (Semantic HTML perspective ) to wrap your'e links with <ul></ul> and each link 
          is a <li></li>

          the header part that you wrapped your'e component from outside its not a must
      */}
      <NavLink
        to={routes.dashboard}
        className="flex-1 text-center transition-colors"
      >
        <h2 className="text-amber-600">Home</h2>
      </NavLink>
      <div className=" flex-[3] flex justify-evenly items-center">
        <NavLink to={routes.characters}>
          {({ isActive }) => {
            return (
              <button
                className={`border-0 p-2 rounded-lg border-amber-600 ${
                  isActive ? "text-white" : "text-amber-600"
                } transition-colors`}
              >
                Characters
              </button>
            );
          }}
        </NavLink>
        <NavLink to={routes.episodes}>
          <button className="border-0 p-2 rounded-lg border-amber-600 text-amber-600 transition-colors">
            Episodes
          </button>
        </NavLink>
        <NavLink to={routes.loactions}>
          <button className="border-0 p-2 rounded-lg border-amber-600 text-amber-600 transition-colors">
            Locations
          </button>
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
