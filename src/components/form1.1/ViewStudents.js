import React, { Component } from "react";
import axios from "axios";
import NumericInput from "react-numeric-input";
import FormatedTextField from "../common/FormatedTextField";
import { RadioGroup, Radio } from "react-radio-group";

class ViewStudents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      studentData: [],

      ITNo: "",
      name: "",
      address: "",
      homeNo: "",
      mobileNo: "",
      email: "",
      semester: "",
      year: "",
      cgpa: ""
    };
    this.onView = this.onView.bind(this);
  }
  onUpdate(e) {
    e.preventDefault();

    const studentData = {
      ITNo: this.state.ITNo,
      name: this.state.name,
      address: this.state.address,
      homeNo: this.state.homeNo,
      mobileNo: this.state.mobileNo,
      email: this.state.email,
      semester: this.state.semester,
      year: this.state.year,
      cgpa: this.state.cgpa
    };

    // Add Student details
    console.log("sss" + studentData);
    axios
      .put("http://localhost:8083/student/" + e.target._id, studentData)
      .then(res => {
        console.log(studentData);
        alert("Student Details Updated");
      })
      .catch(err => {
        console.log(err);
      });
  }
  updateStudent() {
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
                  placeholder="Home No"
                  name="homeNo"
                  value={this.state.homeNo}
                  onChange={this.onChange}
                  info="Home No"
                />
                <FormatedTextField
                  placeholder="E-mail"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  info="E-mail"
                />

                <small className="form-text text-muted">Semester</small>
                <RadioGroup
                  name="semester"
                  selectedValue={this.state.semester}
                  onChange={this.handleChangeSem}
                >
                  <label>
                    <Radio value="1" />1
                  </label>
                  <label>
                    <Radio value="2" />2
                  </label>
                </RadioGroup>
                <small className="form-text text-muted">Year</small>
                <RadioGroup
                  name="year"
                  selectedValue={this.state.year}
                  onChange={this.handleChangeYear}
                >
                  <label>
                    <Radio value="1" />1
                  </label>
                  <label>
                    <Radio value="2" />2
                  </label>
                  <label>
                    <Radio value="3" />3
                  </label>
                  <label>
                    <Radio value="4" />4
                  </label>
                </RadioGroup>

                <small className="form-text text-muted">CGPA</small>
                <NumericInput
                  name="cgpa"
                  min={0}
                  max={4}
                  step={0.1}
                  precision={1}
                  value={this.state.cgpa}
                  onChange={this.onChangeSpinnerCgpa}
                />

                <input
                  type="update"
                  value="update"
                  className="btn btn-info btn-block mt-4"
                  onClick={this.onUpdate}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  onView(e) {
    axios
      .get("http://localhost:8083/student/" + e.target._id)
      .then(res => {
        var data = res.data.data;
        this.setState({
          studentData: data
        });
        this.setState({
          ITNo: this.studentData.ITNo,
          name: this.studentData.name,
          address: this.studentData.address,
          homeNo: this.studentData.homeNo,
          mobileNo: this.studentData.mobileNo,
          email: this.studentData.email,
          semester: this.studentData.semester,
          year: this.studentData.year,
          cgpa: this.studentData.cgpa
        });

        this.updateStudent();
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    axios
      .get("http://localhost:8083/student/")
      .then(res => {
        var data = res.data.data;
        this.setState({
          data: data
        });
        //console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const displayStudent = this.state.data.map(item => {
      return (
        <tr key={item._id}>
          <td key={item._id}>{item.ITNo}</td>
          <td key={item._id}>{item.name}</td>
          <td key={item._id}>{item.email}</td>
          <td key={item._id}>{item.semester}</td>
          <td key={item._id}>{item.year}</td>
          <td key={item._id}>{item.cgpa}</td>

          <td>
            <div className="btn-group">
              <a
                id={item._id}
                value={item._id}
                className="btn btn-danger"
                onClick={this.onView}
              >
                View
              </a>
            </div>
          </td>
        </tr>
      );
    });

    return (
      <div className="landing-inner">
        <div className="row">
          <div className="col-lg-12">
            <section className="panel">
              <h1 className="display-4 text-left">FORM1.1 Filled Students</h1>
              <FormatedTextField
                placeholder="Filter students by ID,Name,Email,Semester,Year or GPA"
                name="ITNo"
                value={this.state.ITNo}
                onChange={this.onChange}
                info="Search"
              />
              <table className="table table-striped table-advance table-hover">
                <tbody>
                  <tr>
                    <th>Student ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Semester</th>
                    <th>year</th>
                    <th>GPA</th>
                    <th>Action</th>
                  </tr>
                  {displayStudent}
                </tbody>
              </table>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
export default ViewStudents;
