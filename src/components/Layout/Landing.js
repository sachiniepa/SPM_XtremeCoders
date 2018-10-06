import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    console.log("props", this.props);
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">SLIIT Internship Program</h1>

                <Link to="/addStudent">
                  <a className="btn btn-lg btn-light">
                    <i class="fa fa-graduation-cap" />
                    Student Login
                  </a>
                </Link>
                <Link to="/addEmployee">
                  <a className="btn btn-lg btn-light">
                    <i class="fa fa-user-tie" />
                    Employee Login
                  </a>
                </Link>
                <Link to="/viewStudents">
                  <a className="btn btn-lg btn-light">
                    <i class="fa fa-user" />
                    Admin Login
                  </a>
                </Link>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
