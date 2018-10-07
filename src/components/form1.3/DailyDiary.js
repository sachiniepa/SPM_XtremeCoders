import React, { Component } from "react";
import FormatedTextField from "../common/FormatedTextField";


import axios from "axios";
import FormatedList from "../common/FormatedList";



class DailyDiary extends Component {
//constructor of the daily diary
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            ITNo:"",
            address:"",
            contactNo:"",
            email:"",
            internship_title:"",
            Specialization:"",
            From:"",
            To:"",
            Training_party:"",
            Training_desc:"",
            Period_from:"",
            Period_to:"",
            itData: []
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

       
    }

    componentDidMount() {
        axios
          .get("http://localhost:8083/dailydiary/")
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
///////////////////////////////////////////////////////////////////////////////////////////////////////
    onSubmit(e) {
        e.preventDefault();

        console.log("onsubmit");
    
        const diaryData = {
            name: this.state.name,
            ITNo: this.state.ITNo,
            address: this.state.address,
            contactNo: this.state.contactNo,
            email: this.state.email,
            internship_title: this.state.internship_title,
            Specialization: this.state.Specialization,
            From: this.state.From,
            To: this.state.To,
            Training_party: this.state.Training_party,
            Training_desc: this.state.Training_desc,
            Period_from: this.state.Period_from,
            Period_to: this.state.Period_to
        };
    
        // Add diary data 
        //Set data to the fields and send the data set using a post method
        console.log("sss" + diaryData);
        axios
          .post("http://localhost:8083/diary", diaryData,{'Content-Type': 'application/json'})
          .then(res => {
            console.log('res : ',res);
            alert("diaryData Added");
    
            this.setState({
                name:"",
                ITNo:"",

                address:"",
                contactNo:"",
                email:"",
                internship_title:"",
                Specialization:"",
                From:"",
                To:"",
                Training_party:"",
                Training_desc:"",
                Period_from:"",
                Period_to:""
            });
          })
          .catch(err => {
            console.log(err);
          });
      }
    

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        console.log(e.target.name);
        if(e.target.name === "ITNo"){
            console.log(e.target.name);
            console.log(this.state.name);
            axios
                .get("http://localhost:8083/student?ITNo="+e.target.value)
                .then(Response => {
                    var data = Response.data;
                    console.log(data[0].name);
                    this.setState({
                        name: data[0].name,
                        address: data[0].address,
                        contactNo: data[0].mobileNo,
                        email: data[0].email
                    });
                    //console.log(this.state.name);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        console.log("onchange");
      }


      // getStudentDetails(e){
      //     //e.preventDefault();
      //     this.setState({ [e.target.name]: e.target.value });
      //     axios
      //         .get("http://localhost:8083/student?ITNo="+e.target.value)
      //         .then(Response => {
      //             var data = Response.data;
      //             console.log(data);
      //             this.setState({
      //                 name: data.name,
      //                 address: data.address,
      //                 contactNo: data.mobileNo,
      //                 email: data.email
      //             });
      //             console.log(data);
      //         })
      //         .catch(err => {
      //             console.log(err);
      //         });
      //
      // }
    render () {
        const itNumbers = this.state.itData.map(item => {
            return {
                label: item.ITNo,
                value: item.ITNo,
            };
        });

        return (

        <div className="landing-inner">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h3 className="display-4 text-left">From 1-3</h3>
                  <br></br>
                  <h2>Intern's Daily Diary</h2>
                  <br></br>

                    <form>

                        <i>(To be filled by the Intern)</i>

                        <h5>Intern's Information</h5>

                        <FormatedList
                            placeholder="IT Number"
                            name="ITNo"
                            value={this.state.ITNo}
                            onChange={this.onChange}
                            options={itNumbers}
                            info="IT Number"
                        />
                          <FormatedTextField
                            placeholder="Intern's Name"
                            name="name"
                            value={this.state.name}
                            onChange={this.onChange}
                            info="Intern's Name"
                            />
                            <FormatedTextField
                            placeholder="Intern's Private Address"
                            name="address"
                            value={this.state.address}
                            onChange={this.onChange}
                            info="Intern's Private Address"
                            />
                            <FormatedTextField
                            placeholder="Contact No"
                            name="contactNo"
                            value={this.state.contactNo}
                            onChange={this.onChange}
                            info="Contact No"
                            />
                            <FormatedTextField
                            placeholder="Email address"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            info="Email address"
                            />

                            <br></br>
                            <h5>Internship Information</h5>

                            <FormatedTextField
                            placeholder="Internship Title"
                            name="internship_title"
                            value={this.state.internship_title}
                            onChange={this.onChange}
                            info="Internship Title"
                            />
                              <FormatedTextField
                            placeholder="Specialization"
                            name="Specialization"
                            value={this.state.Specialization}
                            onChange={this.onChange}
                            info="Specialization"
                            />
                              <FormatedTextField
                            placeholder="Overall Internship Period From"
                            name="From"
                            value={this.state.From}
                            onChange={this.onChange}
                            info="Overall Internship Period From"
                            />
                              <FormatedTextField
                            placeholder="Period To"
                            name="To"
                            value={this.state.To}
                            onChange={this.onChange}
                            info="Period To"
                            />

                            
                        <i>(To be filled by the Intern)</i>

                       <form>
                       <div class="row">
                          <div class="form-group col-xs-6">
                              <label for="firstname" class="sr-only"></label>
                              <input id="firstname" class="form-control input-group-lg reg_name" type="text" name="firstname"
                                    title="Enter first name"
                                    placeholder="First name"/>
                          </div>                            
                          <div class="form-group col-xs-6">
                              <label for="lastname" class="sr-only"></label>
                              <input id="lastname" class="form-control input-group-lg reg_name" type="text" name="lastname"
                                    title="Enter last name"
                                    placeholder="Last name"/>
                          </div>
                          <div class="form-group col-xs-6">
                              <label for="lastname" class="sr-only"></label>
                              <input id="lastname" class="form-control input-group-lg reg_name" type="text" name="lastname"
                                    title="Enter last name"
                                    placeholder="Last name"/>
                          </div>
                      </div>
                     
                         
                       </form>

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

export default DailyDiary;
