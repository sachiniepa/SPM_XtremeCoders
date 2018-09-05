import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Sidebar from "./components/Layout/Sidebar";
import AddStudent from "./components/form1.1/AddStudentDetails";
import AddEmployee from "./components/form1.1/AddEmployeeDetails";
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={App} />

      <Route
        exact
        path="/addStudent"
        render={() => {
          return (
            <div>
              <Navbar />
              <div className="row">
                <div className="col-md-3">
                  <Sidebar />
                </div>
                <div className="col-md-8">
                  <AddStudent />
                </div>
              </div>
              <Footer />
            </div>
          );
        }}
      />
        <Route
        exact
        path="/addEmployee"
        render={() => {
          return (
            <div>
              <Navbar />
              <div className="row">
                <div className="col-md-3">
                  <Sidebar />
                </div>
                <div className="col-md-8">
                  <AddEmployee />
                </div>
              </div>
              <Footer />
            </div>
          );
        }}
      />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
