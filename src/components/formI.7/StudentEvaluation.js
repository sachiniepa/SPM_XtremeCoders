import React, { Component } from "react";
import NumericInput from "react-numeric-input";
import FormatedTextField from "../common/FormatedTextField";
import FormatedList from "../common/FormatedList";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import axios from "axios";

class StudentEvaluation extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:"",
        sid :"",
        phone :"",
        email :"" ,
        EmployerName : "",
        SupName :"",
        dTitle:"",
        Specialization : "",
        duration :"" ,
        credits :"",
        IntTitle :"" ,
        comment1 :"",
        comment2 :"",
        mProgress :"",
        fProgress:"",
        Viva :"",
        Total :"",
        fGrade :"",
        ExName :"" ,
        Date :"",
        itData: []
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // this.onChangeSpinnerHrs = this.onChangeSpinnerHrs.bind(this);
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

    const EvaluationData = {
      ITNo: this.state.ITNo,
        name:this.state.name,
        sid :this.state.sid,
        phone :this.state.phone,
        email :this.state.email ,
        EmployerName :this.state.EmployerName,
        SupName :this.state.SupName,
        dTitle:this.state.dTitle,
        Specialization :this.state.Specialization,
        duration :this.state.duration,
        credits :this.state.credits,
        IntTitle :this.state.IntTitle ,
        comment1 :this.state.comment1,
        comment2 :this.state.comment2,
        mProgress :this.state.mProgress,
        fProgress:this.state.fProgress,
        Viva :this.state.Viva,
        Total :this.state.Total,
        fGrade :this.state.fGrade,
        ExName :this.state.ExName ,
        Date :this.state.Date
    };

    // Add Employee details
    console.log("sss" + EvaluationData);
    axios
      .post("http://localhost:8083/evaluation", EvaluationData)
      .then(res => {
        console.log(EvaluationData);
        alert("Student Performance evaluation data Added");

        this.setState({
            name:"",
            sid :"",
            phone :"",
            email :"" ,
            EmployerName : "",
            SupName :"",
            dTitle:"",
            Specialization : "",
            duration :"" ,
            credits :"",
            IntTitle :"" ,
            comment1 :"",
            comment2 :"",
            mProgress :"",
            fProgress:"",
            Viva :"",
            Total :"",
            fGrade :"",
            ExName :"" ,
            Date :""
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  // onChangeSpinnerHrs(num) {
  //   this.setState({
  //     noOfHours: num
  //   });
  // }


    onChangeSpinnerCredits(num) {
        this.setState({
            credits: num
        });
    }


    onChangeSpinnerCgpa(num) {
        this.setState({
            duration: num
        });
    }

  render() {
    const itNumbers = this.state.itData.map(item => {
      return {
        label: item.sid,
        value: item.sid
      };
    });
    return (
      <div className="landing-inner">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-left">Student Performance Evaluation</h1>
              <h2>Form I-7</h2>
                <h3>Student Information</h3>
              <form>
                <FormatedList
                  placeholder="Student ID"
                  name="sid"
                  value={this.state.sid}
                  onChange={this.onChange}
                  options={itNumbers}
                  info="Student Id"
                />
                <FormatedTextField
                  placeholder="Student's Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  info="Name"
                />
                <FormatedTextField
                  placeholder="Student's Phone"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.onChange}
                  info="phone"
                />
                  <FormatedTextField
                      placeholder="Student's e-mail"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                      info="email"
                  />
                  <h3>Employer Information</h3>
                  <FormatedTextField
                      placeholder="Employer's Name"
                      name="EmployerName"
                      value={this.state.EmployerName}
                      onChange={this.onChange}
                      info="Employer's Name"
                  />
                <FormatedTextField
                  placeholder="Supervisor's Name"
                  name="supName"
                  value={this.state.supName}
                  onChange={this.onChange}
                  info="Supervisor's Name"
                />
                  <h3>Academic Information</h3>
                <FormatedTextField
                  placeholder="Degree Title"
                  name="dTitle"
                  value={this.state.dTitle}
                  onChange={this.onChange}
                  info="Degree Title"
                />
                  <FormatedTextField
                      placeholder="Specialization"
                      name="Specialization"
                      value={this.state.Specialization}
                      onChange={this.onChange}
                      info="Specialization"
                  />

                  <small className="form-text text-muted">Duration(month)</small>
                  <NumericInput
                      name="duration"
                      min={1}
                      max={24}
                      step={1}
                      precision={1}
                      value={this.state.duration}
                      onChange={this.onChangeSpinnerCgpa}
                  />
               
                <FormatedTextField
                  placeholder="Internship Title"
                  name="intern"
                  value={this.state.IntTitle}
                  onChange={this.onChange}
                  info="Internship title"
                />
                  <small className="form-text text-muted">Duration(month)</small>
                  <NumericInput
                      name="credits"
                      min={0}
                      max={100.0}
                      step={0.1}
                      precision={0}
                      value={this.state.credits}
                      onChange={this.onChangeSpinnerCredids}
                  />
                  <FormatedTextField
                      placeholder="Comment 1"
                      name="comment1"
                      value={this.state.comment1}
                      onChange={this.onChange}
                      info="comment 1"
                  />
                  <FormatedTextField
                      placeholder="Comment 2"
                      name="comment2"
                      value={this.state.comment2}
                      onChange={this.onChange}
                      info="comment 2"
                  />


                <FormatedTextField
                  placeholder="Monthly progress"
                  name="tasks"
                  value={this.state.mProgress}
                  onChange={this.onChange}
                  info="monthly progress"
                />
                  <FormatedTextField
                      placeholder="Internship report"
                      name="intenReport"
                      value={this.state.fProgress}
                      onChange={this.onChange}
                      info="Internship report"
                  />
                <FormatedTextField
                  placeholder="Viva"
                  name="viva"
                  value={this.state.Viva}
                  onChange={this.onChange}
                  info="Viva"
                />

                <FormatedTextField
                  placeholder="Total"
                  name="total"
                  value={this.state.Total}
                  onChange={this.onChange}
                  info="tolal"
                />
                  <FormatedTextField
                      placeholder="Grade"
                      name="grade"
                      value={this.state.fGrade}
                      onChange={this.onChange}
                      info="Final Grade"
                  />
                  <FormatedTextField
                      placeholder="Examiners Name"
                      name="ExName"
                      value={this.state.fGrade}
                      onChange={this.onChange}
                      info="ExName"
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

export default StudentEvaluation;
