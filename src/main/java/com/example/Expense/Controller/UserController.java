package com.example.Expense.Controller;

import com.example.Expense.Entity.User;
import com.example.Expense.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService us;

    @PostMapping("/register")
    public ResponseEntity<?> userRegister(@RequestBody User user){
        return us.createRegister(user);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user){
        return us.userLogin(user);
    }
}
