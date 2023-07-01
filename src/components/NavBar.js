import { NavLink, Link } from "react-router-dom";
import Dashboard from "./../pages/Dashboard";
function NavBar() {
  return (
    <header className="mb-4">
      <div className="px-3 py-2 bg-dark text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <h1>PRODUCT CRUD APP</h1>
            </Link>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <NavLink className="nav-link text-white" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link text-white" to="/dashboard">
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
