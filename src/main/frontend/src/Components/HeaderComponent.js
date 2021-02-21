import React, { Component } from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import EmployeeService from '../Services/EmployeeService'
import { withRouter } from 'react-router-dom';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Employee Management</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link onClick={this.addEmployee}>Add Employee</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search Employee" name="keyword" id="keyword"
                                     className="mr-sm-2" />
                                     
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
                <br/>
            </div>

        )
    }
}
export default withRouter (HeaderComponent);