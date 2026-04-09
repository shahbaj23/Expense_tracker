package com.example.Expense.Entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Data
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String expensename;

    @Column(nullable = false)
    private Double amount;

    private LocalDate date;

    private String description;
}
