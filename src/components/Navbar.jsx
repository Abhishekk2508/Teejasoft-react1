import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaHandshake } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClick = () => setServiceOpen(false);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm custom-navbar">
      <div className="container-fluid px-3 px-lg-4">

        {/* LOGO */}
        <NavLink className="navbar-brand me-0" to="/">
          <img src={logo} alt="Teejaysoft" />
        </NavLink>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto align-items-lg-center text-center">

            {/* HOME */}
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) => "nav-link " + (isActive ? "active-link" : "")}
              >
                Home
              </NavLink>
            </li>

            {/* SERVICES DROPDOWN */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                onClick={(e) => {
                  e.stopPropagation();
                  setServiceOpen(!serviceOpen);
                }}
              >
                Our Services
              </button>
              <ul className={`dropdown-menu ${serviceOpen ? "show" : ""}`}>

                <li>
                  <NavLink className="dropdown-item" to="/services/web-development">
                    Web Development
                  </NavLink>
                </li>


                <li>
                  <NavLink className="dropdown-item" to="/services/digital-marketing">
                    Digital Marketing
                  </NavLink>
                </li>

                <li>
                  <NavLink className="dropdown-item" to="/services/graphic-design">
                    Design Services
                  </NavLink>
                </li>


                <li>
                  <NavLink className="dropdown-item" to="/services/paid-ads">
                    Paid Advertising
                  </NavLink>
                </li>


                <li>
                  <NavLink className="dropdown-item" to="/services/web-development">
                    Domain & Hosting
                  </NavLink>
                </li>

              </ul>

            </li>

            {/* ABOUT US */}
            <li className="nav-item">
              <NavLink
                to="/Aboutpg"
                className={({ isActive }) => "nav-link " + (isActive ? "active-link" : "")}
              >
                About Us
              </NavLink>
            </li>

            {/* PORTFOLIO */}
            <li className="nav-item">
              <NavLink
                to="/Portfoliopg"
                className={({ isActive }) => "nav-link " + (isActive ? "active-link" : "")}
              >
                Portfolio
              </NavLink>
            </li>

            {/* BLOG */}
            <li className="nav-item">
              <NavLink
                to="/Blogpg"
                className={({ isActive }) => "nav-link " + (isActive ? "active-link" : "")}
              >
                Blog
              </NavLink>
            </li>

            {/* CONTACT US */}
            <li className="nav-item">
              <NavLink
                to="/Contactpg"
                className={({ isActive }) => "nav-link " + (isActive ? "active-link" : "")}
              >
                Contact Us
              </NavLink>
            </li>

          </ul>

          {/* RIGHT CTA BUTTON */}
          <div className="cta-btn">
            <NavLink to="/contact" className="btn btn-talk">
              <FaHandshake className="me-2" />
              Let's Talk
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
