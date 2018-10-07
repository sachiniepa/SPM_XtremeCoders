import React, { Component } from "react";
import NumericInput from "react-numeric-input";
import FormatedTextField from "../common/FormatedTextField";
import FormatedList from "../common/FormatedList";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";


import axios from "axios";

class StudentEvaluation extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
        sid :"",
        name:"",
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
        Date : moment(),
        itData: []
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleMfg = this.handleMfg.bind(this);
    this.calTot = this.calTot.bind(this);
    this.onChangeSpinnerProgress= this.onChangeSpinnerProgress.bind(this);
    this.onChangeSpinnerViva= this.onChangeSpinnerViva.bind(this);
    this.onChangeSpinnerIntern= this.onChangeSpinnerIntern.bind(this);
    this.onChangeSpinnerDuration= this.onChangeSpinnerDuration.bind(this);

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


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleMfg(date) {
        this.setState({
            Date: date
        });
    }

    onChangeSpinnerCredits(num) {
        this.setState({
            credits : num
        });
    }
    onChangeSpinnerProgress(num) {
        this.setState({
            mProgress : num
        });
    }
    onChangeSpinnerIntern(num) {
        this.setState({
            fProgress : num
        });
    }
    onChangeSpinnerViva(num) {
        this.setState({
            Viva : num
        });
    }


    onChangeSpinnerDuration(num) {
        this.setState({
            duration: num
        });
    }




    onSubmit(e) {
    e.preventDefault();

    const EvaluationData = {
      
        
        sid :this.state.sid,
        name:this.state.name,
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

    console.log("sss" + EvaluationData.sid);
    console.log("sss" + EvaluationData.name);
    console.log("sss" + EvaluationData.phone);
    console.log("sss" + EvaluationData.email);
    console.log("sss" + EvaluationData.EmployerName);
    console.log("sss" + EvaluationData.SupName);
    console.log("sss" + EvaluationData.dTitle);
    console.log("sss" + EvaluationData.Specialization);
    console.log("sss" + EvaluationData.duration);
    console.log("sss" + EvaluationData.credits);
    console.log("sss" + EvaluationData.IntTitle);
    console.log("sss" + EvaluationData.comment1);
    console.log("sss" + EvaluationData.comment2);
    console.log("sss" + EvaluationData.mProgress);
    console.log("sss" + EvaluationData.fProgress);
    console.log("sss" + EvaluationData.Viva);
    console.log("sss" + EvaluationData.Total);
    console.log("sss" + EvaluationData.fGrade);
    console.log("sss" + EvaluationData.ExName);
    console.log("sss" + EvaluationData.Date);

    axios
      .post("http://localhost:8083/evaluation/", EvaluationData)
      .then(res => {
        console.log(EvaluationData);
        alert("Student Performance evaluation data Added");

        this.setState({
           
            sid :"",
            name:"",
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
            Date :moment()
        });
      })
      .catch(err => {
        console.log(err);
      });
  }


  // onChangeSpinnerHrs(num) {
  //   this.setState({
  //     noOfHours: num
  //   });
  // }

    calTot(e) {
       const a = this.state.mProgress;
        const b = this.state.fProgress;
        const c = this.state.Viva;
        const tot =a+ b+c;
        this.setState({ Total: tot });
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
                  name="SupName"
                  value={this.state.SupName}
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

                  <small className="form-text text-muted">
                      Duration(in Months)
                  </small>
                  <NumericInput
                      name="duration"
                      min={0}
                      max={100}
                      value={this.state.duration}
                      onChange={this.onChangeSpinnerDuration}
                  />
               
                <FormatedTextField
                  placeholder="Internship Title"
                  name="IntTitle"
                  value={this.state.IntTitle}
                  onChange={this.onChange}
                  info="Internship title"
                />
                  <FormatedTextField
                      placeholder="Credits"
                      name="credits"
                      value={this.state.credits}
                      onChange={this.onChange}
                      info="Credits"
                  />
                  <FormatedTextField
                      placeholder="Comment"
                      name="comment1"
                      value={this.state.comment1}
                      onChange={this.onChange}
                      info="comments on how the internship benefited the student"
                  />
                  <FormatedTextField
                      placeholder="Comment"
                      name="comment2"
                      value={this.state.comment2}
                      onChange={this.onChange}
                      info="comments on how the student performed including observations on the report"
                  />


                  <small className="form-text text-muted">
                     Monthly Progress(30%)
                  </small>
                  <NumericInput
                      name="mProgress"
                      min={0}
                      max={30}
                      value={this.state.mProgress}
                      onChange={this.onChangeSpinnerProgress}
                  />
                  <small className="form-text text-muted">
                      Internship Report(30%)
                  </small>
                  <NumericInput
                      name="fProgress"
                      min={0}
                      max={30}
                      value={this.state.fProgress}
                      onChange={this.onChangeSpinnerIntern}
                  />

                  <small className="form-text text-muted">
                      Viva(40%)
                  </small>
                  <NumericInput
                      name="Viva"
                      min={0}
                      max={40}
                      value={this.state.Viva}
                      onChange={this.onChangeSpinnerViva}
                  />

                  <input
                      type="calTot"
                      value="Calculate Total"
                      className="btn btn-primary btn-lg
                  mt-4 "
                      onClick={this.calTot}
                  />


                  <FormatedTextField
                  placeholder="Total"
                  name="Total"
                  value={this.state.Total}
                  onChange={this.onChange}
                  info="Tolal"
                />
                  <FormatedTextField
                      placeholder="Grade"
                      name="fGrade"
                      value={this.state.fGrade}
                      onChange={this.onChange}
                      info="Final Grade"
                  />
                  <FormatedTextField
                      placeholder="Examiners Name"
                      name="ExName"
                      value={this.state.ExName}
                      onChange={this.onChange}
                      info="Examiners Name"
                  />

                  <small className="form-text text-muted">Date</small>
                  <DatePicker
                      name="Date"
                      value={this.state.Date}
                      selected={this.state.Date}
                      onChange={this.handleMfg}
                      info="Date"
                      dateFormat="DD-MM-YYYY"
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