package com.PerryTech.EmployeeManagement.Controller;

import com.PerryTech.EmployeeManagement.Model.Employee;
import com.PerryTech.EmployeeManagement.Services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/api/v1/employee")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @GetMapping("/all")
    public ResponseEntity<Collection<Employee>> getAllEmployees(@Param("keyword") String keyword){
        Collection<Employee> employees = employeeService.employeeList(keyword);
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping("find/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable String id) {
        Employee employee = employeeService.findEmployeeById(Long.parseLong(id));
        return new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
        Employee newEmployee = employeeService.createEmployee(employee);
        return new ResponseEntity<>(newEmployee, HttpStatus.CREATED);
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity < Employee > updateEmployee(@PathVariable String id, @RequestBody Employee employeeDetails) {
        Employee employee = employeeService.updateEmployee(Long.parseLong(id), employeeDetails);
        return  new ResponseEntity<>(employee, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable String id){
        employeeService.deleteEmployee(Long.parseLong(id));
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
