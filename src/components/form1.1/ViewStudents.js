import React, { Component } from "react";
import axios from "axios";
import FormatedTextField from "../common/FormatedTextField";
class ViewStudents extends Component {
  constructor(props) {
    super(props);

    this.state = {
        data: [],
        key: ""
    };
    this.onDelete = this.onDelete.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:8083/student/")
      .then(Response => {
        var data = Response.data;
        this.setState({
          data: data
        });
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  onDelete(e) {
    axios
      .delete("http://localhost:8083/student/" + e.target.id)
      .then(res => {
        alert("Drug deleted" + res.data.status);
        // console.log(drugData);
      })
      .catch(err => {
        console.log(err);
      });
  }

    onSearchChange(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({key:event.target.value });
        //this.searchKey = event.target.value;
    }


    render() {
    var displayStudent = this.state.data.map(item => {
        let searchkey = new RegExp(this.state.key, "i");
        console.log(searchkey);
        if(this.state.key === ""){
            console.log("No search key");
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
                                onClick={this.onDelete}
                            >
                                Delete
                            </a>
                        </div>
                    </td>
                </tr>
            );
        } else if(item.ITNo.match(searchkey)){
            console.log("Search key included");
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
                                onClick={this.onDelete}
                            >
                                Delete
                            </a>
                        </div>
                    </td>
                </tr>
            );
        }

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
                onChange={event => this.onSearchChange(event)}
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
