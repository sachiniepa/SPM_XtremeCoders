import React, { Component } from "react";
import { Link } from "react-router-dom";
class Sidebar extends Component {
  render() {
    return (
      <div className="sidenav">
        <ul class="nav">
          <Link to="/addStudent">
            <span className="text">
              <i class="fa fa-user-graduate" />
              Student Details
            </span>
          </Link>
          <Link to="/addEmployee">
            <span className="text">
              <i class="fa fa-briefcase" />
              Employee Details
            </span>
          </Link>
          <Link to="/viewStudents">
            <span className="text">
              <i class="fa fa-table" />
              View Students
            </span>
          </Link>
          <Link to="/dailyDiary">
            <span className="text">
              <i class="fa fa-book" />
              Daily Diary
            </span>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
