import React, { Component } from "react";
import NumericInput from "react-numeric-input";
import FormatedTextField from "../common/FormatedTextField";
import FormatedList from "../common/FormatedList";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from "axios";

class AddEmployeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      supName: "",
      supTitle: "",
      supPhone: "",
      supEmail: "",
      startDate: "",
      endDate: "",
      noOfHours: "",
      tasks: "",
      outcome: "",
      Ext_Sup_Name: "",
      Date: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.onChangeSpinnerSem = this.onChangeSpinnerSem.bind(this);
    this.onChangeSpinnerYear = this.onChangeSpinnerYear.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const studentData = {
      name: this.state.name,
      address: this.state.address,
      supName: this.state.supName,
      supTitle: this.state.supTitle,
      supPhone: this.state.supPhone,
      supEmail: this.state.supEmail,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      noOfHours: this.state.noOfHours,
      tasks: this.state.tasks,
      outcome: this.state.outcome,
      Ext_Sup_Name: this.state.Ext_Sup_Name,
      Date: this.state.Date,
    };

    // Add Student details
    console.log("sss" + studentData);
    axios
      .post("http://localhost:8083/drug/batch", studentData)
      .then(res => {
        console.log(studentData);
        alert("batch Added");

        this.setState({
          ITNo: "",
          name: "",
          address: "",
          homeNo: "",
          mobileNo: "",
          email: "",
          semester: "",
          year: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChangeSpinnerSem(num) {
    this.setState({
      semester: num
    });
  }
  onChangeSpinnerYear(num) {
    this.setState({
      year: num
    });
  }

  render() {
    return (
      <div className="landing-inner">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-left">Form 1-1:Student Details</h1>
              <form>
                <FormatedTextField
                  placeholder="Registration Number"
                  name="ITNo"
                  value={this.state.ITNo}
                  onChange={this.onChange}
                  info="Registration Number"
                />
                <FormatedTextField
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  info="Name"
                />
                <FormatedTextField
                  placeholder="Address"
                  name="address"
                  value={this.state.address}
                  onChange={this.onChange}
                  info="Address"
                />
                <FormatedTextField
                  placeholder="Mobile No"
                  name="mobileNo"
                  value={this.state.mobileNo}
                  onChange={this.onChange}
                  info="Mobile No"
                />
                <FormatedTextField
                  placeholder="E-mail"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  info="E-mail"
                />

                <small className="form-text text-muted">Semester</small>
                <NumericInput
                  name="semester"
                  min={1}
                  max={3}
                  value={this.state.semester}
                  onChange={this.onChangeSpinnerSem}
                />
                <small className="form-text text-muted">Year</small>
                <NumericInput
                  name="year"
                  min={0}
                  max={2018}
                  value={this.state.year}
                  onChange={this.onChangeSpinnerYear}
                />

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                  onClick={this.onSubmit}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddEmployeeDetails;
