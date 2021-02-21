package com.PerryTech.EmployeeManagement.Services;

import com.PerryTech.EmployeeManagement.Model.Employee;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface EmployeeService {

    public List<Employee> employeeList(String keyword);

    public Employee findEmployeeById(Long id);

    public Employee createEmployee(Employee employee);

    public Employee updateEmployee(Long id, Employee employee);

    public ResponseEntity<Map<String, Boolean>> deleteEmployee(Long id);
}
