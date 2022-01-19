import React, { useRef, useEffect } from "react";
import { RiMovie2Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { useLocation, Link } from "react-router-dom";

import "./header.scss";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movie",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const active = headerNav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header-wrapper container">
        <div className="header-logo">
          <RiMovie2Fill className="logo-icon" />
          <Link to="/">ZMovie</Link>
        </div>
        <ul className="header-nav">
          {headerNav.map((item, index) => (
            <li key={index} className={`${index === active ? "active" : ""}`}>
              <Link to={item.path}>{item.display}</Link>
            </li>
          ))}
          <li className="user">
            <FaUser className="user-icon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
