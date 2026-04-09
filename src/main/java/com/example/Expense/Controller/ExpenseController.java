package com.example.Expense.Controller;

import com.example.Expense.Entity.Expense;
import com.example.Expense.Service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/expense-tracker")
@CrossOrigin(origins = "*")
public class ExpenseController {

    @Autowired
    private ExpenseService expenseService;

    @PostMapping("/add-expense")
    public Expense createExpense(@RequestBody Expense expense){
        return expenseService.addExpense(expense);
    }

    @PutMapping("/update-expense/{id}")
    public Expense updateExpanse(@PathVariable Integer id, @RequestBody Expense expense){
        return expenseService.updateExpanse(id, expense);
    }

    @GetMapping("/get-expanse")
    public List<Expense> getExpense(){
        return expenseService.getExpanse();
    }

}
