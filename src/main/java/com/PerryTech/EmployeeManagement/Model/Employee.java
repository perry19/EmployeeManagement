package com.PerryTech.EmployeeManagement.Model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "employee")
@Data
@NoArgsConstructor
@DynamicInsert
@DynamicUpdate
public class Employee implements Serializable {

    @Id
    @SequenceGenerator(
            name = "employee_sequence",
            sequenceName = "employee_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "employee_sequence"
    )

    @Column(nullable = false, updatable = false)
    private Long employeeId;
    private String employeeName;
    private String email;
    private String jobTitle;
    private String phone;
    private String imageUrl;

    @Column(nullable = false, updatable = false)
    private String employeeCode;
}
