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
      ITNo: "",
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
      itData: []
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.onChangeSpinnerHrs = this.onChangeSpinnerHrs.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://localhost:8083/student/")
      .then(Response => {
        var data = Response.data;
        this.setState({
          itData: data
        });
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  onSubmit(e) {
    e.preventDefault();

    const EmployeeData = {
      ITNo: this.state.ITNo,
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
      Date: this.state.Date
    };

    // Add Employee details
    console.log("sss" + EmployeeData);
    axios
      .post("http://localhost:8083/employee", EmployeeData)
      .then(res => {
        console.log(EmployeeData);
        alert("employeeData Added");

        this.setState({
          ITNo: "",
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
          Date: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onChangeSpinnerHrs(num) {
    this.setState({
      noOfHours: num
    });
  }

  render() {
    const itNumbers = this.state.itData.map(item => {
      return {
        label: item.ITNo,
        value: item.ITNo
      };
    });
    return (
      <div className="landing-inner">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-left">Form 1-1:Employee Details</h1>
              <form>
                <FormatedList
                  placeholder="IT Number"
                  name="ITNo"
                  value={this.state.ITNo}
                  onChange={this.onChange}
                  options={itNumbers}
                  info="IT Number"
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
                  placeholder="Supervisor's Name"
                  name="supName"
                  value={this.state.supName}
                  onChange={this.onChange}
                  info="Supervisor's Name"
                />
                <FormatedTextField
                  placeholder="Supervisor's Title"
                  name="supTitle"
                  value={this.state.supTitle}
                  onChange={this.onChange}
                  info="Supervisor's Title"
                />
                <FormatedTextField
                  placeholder="Supervisor's Phone"
                  name="supPhone"
                  value={this.state.supPhone}
                  onChange={this.onChange}
                  info="Supervisor's Phone"
                />
                <FormatedTextField
                  placeholder="Supervisor's Email"
                  name="supEmail"
                  value={this.state.supEmail}
                  onChange={this.onChange}
                  info="Supervisor's Email"
                />
                <FormatedTextField
                  placeholder="Internship Start Date"
                  name="startDate"
                  value={this.state.startDate}
                  onChange={this.onChange}
                  info="Internship Start Date"
                />
                <FormatedTextField
                  placeholder="Internship End Date"
                  name="endDate"
                  value={this.state.endDate}
                  onChange={this.onChange}
                  info="Internship End Date"
                />

                <small className="form-text text-muted">
                  No of Hours/Weeks
                </small>
                <NumericInput
                  name="noOfHours"
                  min={0}
                  max={10}
                  value={this.state.noOfHours}
                  onChange={this.onChangeSpinnerHrs}
                />

                <FormatedTextField
                  placeholder="Please list the tasks the student is expected to complete"
                  name="tasks"
                  value={this.state.tasks}
                  onChange={this.onChange}
                  info="tasks"
                />
                <FormatedTextField
                  placeholder="List what the student will learn during the internship period"
                  name="outcome"
                  value={this.state.outcome}
                  onChange={this.onChange}
                  info="outcome"
                />
                <FormatedTextField
                  placeholder="External Supervisor's Name"
                  name="Ext_Sup_Name"
                  value={this.state.Ext_Sup_Name}
                  onChange={this.onChange}
                  info="External Supervisor's Name"
                />
                <FormatedTextField
                  placeholder="Date"
                  name="Date"
                  value={this.state.Date}
                  onChange={this.onChange}
                  info="Date"
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
