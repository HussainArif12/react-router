import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <>
      <nav>
        <h1>Logo</h1>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/shop"> Shop</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Nav;
