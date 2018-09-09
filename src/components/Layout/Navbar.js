import React, { Component } from "react";

import { Link } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <div className="collapse navbar-collapse" id="mobile-nav">
            <div className="logo">
              <img src="https://www.sliit.lk/wp-content/uploads/2017/09/SLIIT.png" />
            </div>
            <ul className="navbar-nav ml-auto">
              <div className="btn btn-secondary">
                <Link to="/">Log out</Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
