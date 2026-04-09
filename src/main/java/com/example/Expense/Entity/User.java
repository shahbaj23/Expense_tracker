package com.example.Expense.Entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Entity
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String fullname;

    @Size(min = 8, message = "Password should be more than 8 character")
    @Column(unique = true)
    private String username;
    private String password;
    @Column(unique = true)
    private String email;
}
