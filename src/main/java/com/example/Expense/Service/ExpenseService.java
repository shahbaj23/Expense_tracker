package com.example.Expense.Service;

import com.example.Expense.Entity.Expense;
import com.example.Expense.Repo.ExpenseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService {

    @Autowired
    private ExpenseRepo expenseRepo;

    public Expense addExpense(Expense expense) {
        return expenseRepo.save(expense);
    }

    public Expense updateExpanse(Integer id, Expense expense) {

        Expense expense1 = expenseRepo.findById(id).orElseThrow(()->
                new RuntimeException("this user does not exist"));

        expense1.setAmount(expense.getAmount());
        expense1.setExpensename(expense.getExpensename());
        expense1.setDate(expense.getDate());
        expense1.setDescription(expense.getDescription());

        return expenseRepo.save(expense1);
    }

    public List<Expense> getExpanse() {
        return expenseRepo.findAll();
    }
}
