import React from "react";
import "./Header.css";
import PropTypes from 'prop-types';
function Header({ label }) {
  return (
    <div className="head">
      <nav className="nav">
        <ul className="flex-list">
          <li>{label}</li>
        </ul>
      </nav>
    </div>
  );
}

Header.propTypes = {
  label: PropTypes.string
};
export default Header;
