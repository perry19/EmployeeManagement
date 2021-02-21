package com.PerryTech.EmployeeManagement.Repositories;

import com.PerryTech.EmployeeManagement.Model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    @Query("SELECT p FROM Employee p WHERE CONCAT(p.employeeName, p.jobTitle, p.email, p.phone) LIKE %?1%")
    List<Employee> search(String keyword);
}
