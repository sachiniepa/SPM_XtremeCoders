import React, { Component } from "react";
import { Link } from "react-router-dom";
class Sidebar extends Component {
  render() {
    return (
      <div class="sidenav">
        <Link to="/addStudent">Form1-1:Student Details</Link>
        <Link to="/addEmployee">Form1-1:Employee Details</Link>
        <Link to="/viewStudents">View Students</Link>
        <Link to="/viewBatch">------</Link>
      </div>
    );
  }
}

export default Sidebar;
