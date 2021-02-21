package com.PerryTech.EmployeeManagement.Services;

import com.PerryTech.EmployeeManagement.Exceptions.EmployeeNotFoundException;
import com.PerryTech.EmployeeManagement.Model.Employee;
import com.PerryTech.EmployeeManagement.Repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public List<Employee> employeeList(String keyword) {
        if (keyword != null) {
            return employeeRepository.search(keyword);
        }
        return employeeRepository.findAll();
    }

    @Override
    public Employee findEmployeeById(Long id) {
        return employeeRepository.findById(id).
                orElseThrow(() -> new EmployeeNotFoundException("Employee with id " + id + " not found"));
    }

    @Override
    public Employee createEmployee(Employee employee) {
        employee.setEmployeeCode(UUID.randomUUID().toString());
        employeeRepository.save(employee);
        return employee;
    }

    @Override
    public Employee updateEmployee(Long id, Employee employeeDetails) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("Employee not exist with id :" + id));
        employee.setEmployeeName(employeeDetails.getEmployeeName());
        employee.setEmail(employeeDetails.getEmail());
        employee.setJobTitle(employeeDetails.getJobTitle());
        employee.setPhone(employeeDetails.getPhone());
        employee.setImageUrl(employeeDetails.getImageUrl());

        return employeeRepository.save(employee);
    }

    @Override
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new EmployeeNotFoundException("Employee not exist with id :" + id));
        employeeRepository.delete(employee);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
