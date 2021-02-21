import React, { Component } from 'react'
import EmployeeService from '../Services/EmployeeService'
import Container from "react-bootstrap/Container";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Modal from "react-bootstrap/Modal";

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.employeeId !== id)});
        });
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
            console.log(this.state.employees)
        });
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <CardColumns>
                        {this.state.employees.map((item) =>(

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="bottom" src={item.imageUrl}/>
                                <Card.Body>
                                    <Card.Title>{item.employeeName}</Card.Title>
                                    <Card.Text>
                                        {item.jobTitle}
                                    </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>{item.email}</ListGroupItem>
                                    <ListGroupItem>{item.phone}</ListGroupItem>
                                </ListGroup>
                                <Modal.Footer>
                                    <button onClick={ () => this.editEmployee(item.employeeId)} className="btn btn-info">Edit </button>
                                    <button onClick={ () => this.deleteEmployee(item.employeeId)} className="btn btn-danger">Delete </button>
                                </Modal.Footer>
                            </Card>

                        ))}

                    </CardColumns>
                </Container>

            </div>
        )
    }
}

export default ListEmployeeComponent