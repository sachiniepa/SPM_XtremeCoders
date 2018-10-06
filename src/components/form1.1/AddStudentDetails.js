import React, { Component } from "react";
import NumericInput from "react-numeric-input";
import FormatedTextField from "../common/FormatedTextField";
import axios from "axios";
import { RadioGroup, Radio } from "react-radio-group";

class AddStudentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ITNo: "",
      name: "",
      address: "",
      homeNo: "",
      mobileNo: "",
      email: "",
      semester: "",
      year: "",
      cgpa: "",
      empEmail: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.handleChangeSem = this.handleChangeSem.bind(this);
    this.handleChangeYear = this.handleChangeYear.bind(this);
    this.onChangeSpinnerCgpa = this.onChangeSpinnerCgpa.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:8083/student/")
      .then(Response => {
        var data = Response.data.data;
        this.setState({
          data: data
        });
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  onSubmit(e) {
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
      cgpa: this.state.cgpa,
      empEmail: this.state.empEmail
    };

    // Add Student details
    console.log("sss" + studentData);
    axios
      .post("http://localhost:8083/student/", studentData)
      .then(res => {
        console.log(studentData);
        alert("Student Details submited");

        this.setState({
          ITNo: "",
          name: "",
          address: "",
          homeNo: "",
          mobileNo: "",
          email: "",
          semester: "",
          year: "",
          cgpa: "",
          empEmail: ""
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleChangeYear(selectedValue) {
    this.setState({
      year: selectedValue
    });
  }
  handleChangeSem(selectedValue) {
    this.setState({
      semester: selectedValue
    });
  }

  onChangeSpinnerCgpa(num) {
    this.setState({
      cgpa: num
    });
  }

  render() {
    return (
      <div className="landing-inner">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-left">Student Details</h1>
              <h2>Form I-1</h2>
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
                <FormatedTextField
                  placeholder="Employee E-mail"
                  name="empEmail"
                  value={this.state.empEmail}
                  onChange={this.onChange}
                  info="Employee E-mail"
                />

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                  onClick={this.onSubmit}
                />
                <input
                  type="update"
                  value="update"
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

export default AddStudentDetails;
