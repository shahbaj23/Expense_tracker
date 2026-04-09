package com.example.Expense.Service;

import com.example.Expense.Entity.User;
import com.example.Expense.Repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepo ur;

    public ResponseEntity<?> createRegister(User user) {
        Optional<User> exist = ur.findByEmail(user.getEmail());

        if(exist.isPresent()){
            return ResponseEntity.badRequest().body("This is user is  already exist");
        }

        ur.save(user);
        return ResponseEntity.ok(user);
    }

    public ResponseEntity<?> userLogin(User user) {
        Optional<User> existUser = ur.findByEmailAndPassword(user.getEmail(), user.getPassword());

        if(existUser.isEmpty()){
            return ResponseEntity.badRequest().body("Email is not exist!");
        }

        User u = existUser.get();

        if(u.getPassword().equals(user.getPassword())){
            return ResponseEntity.ok(user);
        } else{
            return ResponseEntity.badRequest().body("Invalid password");
        }


    }

}
