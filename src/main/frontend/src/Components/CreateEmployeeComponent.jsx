import React, { Component } from 'react'
import EmployeeService from '../Services/EmployeeService';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employeeId: this.props.match.params.id,
            employeeName: '',
            jobTitle: '',
            email: '',
            phone: '',
            imageUrl: ''
        }
        this.changeEmployeeNameHandler = this.changeEmployeeNameHandler.bind(this);
        this.changeJobTitleHandler = this.changeJobTitleHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeImageUrlHandler = this.changeImageUrlHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    componentDidMount(){

        if (this.state.employeeId !== '_add') {
            EmployeeService.getEmployeeById(this.state.employeeId).then((res) => {
                let employee = res.data;
                this.setState({
                    employeeName: employee.employeeName,
                    jobTitle: employee.jobTitle,
                    email: employee.email,
                    phone: employee.phone,
                    imageUrl: employee.imageUrl
                });
            });
        }
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {employeeName: this.state.employeeName, jobTitle: this.state.jobTitle,
            email: this.state.email, phone: this.state.phone, imageUrl: this.state.imageUrl};
        console.log('employee => ' + JSON.stringify(employee));

        if(this.state.employeeId === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.employeeId).then( res => {
                this.props.history.push('/employees');
            });
        }
    }

    changeEmployeeNameHandler= (event) => {
        this.setState({employeeName: event.target.value});
    }

    changeJobTitleHandler= (event) => {
        this.setState({jobTitle: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }
    changePhoneHandler= (event) => {
        this.setState({phone: event.target.value});
    }
    changeImageUrlHandler= (event) => {
        this.setState({imageUrl: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    getTitle(){
        if(this.state.employeeId === '_add'){
            return <h3 className="text-center">Add Employee</h3>
        }else{
            return <h3 className="text-center">Update Employee</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Employee Name: </label>
                                        <input placeholder="Employee Name" name="employeeName" className="form-control"
                                               value={this.state.employeeName} onChange={this.changeEmployeeNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Job Title: </label>
                                        <input placeholder="Job Title" name="jobTitle" className="form-control"
                                               value={this.state.jobTitle} onChange={this.changeJobTitleHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Email Id: </label>
                                        <input placeholder="Email Address" name="email" className="form-control"
                                               value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Phone: </label>
                                        <input placeholder="Phone" name="phone" className="form-control"
                                               value={this.state.phone} onChange={this.changePhoneHandler}/>
                                    </div>

                                    <div className = "form-group">
                                        <label> Image URL: </label>
                                        <input placeholder="Image Url" name="ImageUrl" className="form-control"
                                               value={this.state.imageUrl} onChange={this.changeImageUrlHandler}/>
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent