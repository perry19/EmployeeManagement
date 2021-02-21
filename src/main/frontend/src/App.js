// import React, {Component, useState} from 'react';
// import axios from 'axios';
// import HandleShow from "./HandleShow";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from  'react-bootstrap/Nav';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import FormControl from 'react-bootstrap/FormControl';
// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
// import ListGroupItem from 'react-bootstrap/ListGroupItem';
// import CardColumns from 'react-bootstrap/CardColumns';
// import Modal from 'react-bootstrap/Modal';
// import Container from 'react-bootstrap/Container';
// //const API_URL = 'http://localhost:8080/api/v1/employee';
//
// function App(){
//     return(
//         <div>
//             <Router>
//                 <HeaderComponent />
//                 <div className="container">
//                     <Switch>
//                         <Route path = "/" exact component = {ListEmployeeComponent}></Route>
//                         <Route path = "/employees" component = {ListEmployeeComponent}></Route>
//                         <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
//                         <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
//                         {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
//                     </Switch>
//                 </div>
//                 <FooterComponent />
//             </Router>
//         </div>
//     );
// }
// // class App extends Component {
// //
// //     state = {
// //         employees: []
// //     }
// //     componentDidMount() {
//         const url = `${API_URL}/all`;
//         axios.get(url).then(response => response.data)
//             .then((data) => {
//                 this.setState({ employees: data })
//                 console.log(this.state.employees)
//             })
// //     }
// //
// //     render(){
// //         return(
// //             <>
// //             //     <Navbar bg="dark" variant="dark">
// //             //         <Navbar.Brand href="#home">Employee Management</Navbar.Brand>
// //             //         <Nav className="mr-auto">
// //             //             <Nav.Link href="#home" onSelect={HandleShow}>Add Employee</Nav.Link>
// //             //         </Nav>
// //             //         <Form inline>
// //             //             <FormControl type="text" placeholder="Search Employee" className="mr-sm-2" />
// //             //             <Button variant="outline-info">Search</Button>
// //             //         </Form>
// //             //     </Navbar>
// //                 <br/>
// //                 {/*<div>*/}
// //                 {/*    <Container fluid>*/}
// //                 {/*        <CardColumns>*/}
// //                 {/*            {this.state.employees.map((item) =>(*/}
// //
// //                 {/*                <Card style={{ width: '18rem' }}>*/}
// //                 {/*                    <Card.Img variant="bottom" src={item.imageUrl}/>*/}
// //                 {/*                    <Card.Body>*/}
// //                 {/*                        <Card.Title>{item.employeeName}</Card.Title>*/}
// //                 {/*                        <Card.Text>*/}
// //                 {/*                            {item.jobTitle}*/}
// //                 {/*                        </Card.Text>*/}
// //                 {/*                    </Card.Body>*/}
// //                 {/*                    <ListGroup className="list-group-flush">*/}
// //                 {/*                        <ListGroupItem>{item.email}</ListGroupItem>*/}
// //                 {/*                        <ListGroupItem>{item.phone}</ListGroupItem>*/}
// //                 {/*                    </ListGroup>*/}
// //                 {/*                    <Modal.Footer>*/}
// //                 {/*                        <button onClick={ () => this.editEmployee(employee.employeeId)} className="btn btn-info">Edit </button>*/}
// //                 {/*                        <button onClick={ () => this.deleteEmployee(employee.employeeId)} className="btn btn-danger">Delete </button>*/}
// //                 {/*                    </Modal.Footer>*/}
// //                 {/*                </Card>*/}
// //
// //                 {/*            ))}*/}
// //
// //                 {/*        </CardColumns>*/}
// //                 {/*    </Container>*/}
// //
// //                 {/*</div>*/}
// //             </>
// //         );
// //     }
// //
// // }
// export default App;
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateEmployeeComponent from "./Components/CreateEmployeeComponent";

function App() {
    return (
        <div>
            <Router>
                <HeaderComponent />
                <div className="container">
                    <Switch>
                        <Route path = "/" exact component = {ListEmployeeComponent}/>
                        <Route path = "/employees" component = {ListEmployeeComponent}/>
                        <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}/>
                    </Switch>
                </div>
                <FooterComponent />
            </Router>
        </div>

    );
}

export default App;