package pl.mateuszsitek.DogGo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import pl.mateuszsitek.DogGo.model.RegisterRequest;
import pl.mateuszsitek.DogGo.model.User;
import pl.mateuszsitek.DogGo.repository.RoleRepo;
import pl.mateuszsitek.DogGo.repository.UserRepo;

@RestController
@CrossOrigin(value = "*", maxAge = 3600)
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    UserRepo userRepo;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    RoleRepo roleRepo;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody RegisterRequest registerRequest){
        if(userRepo.existsByEmail(registerRequest.getEmail())){
            return ResponseEntity.status(400).body("User with this email already exists!");
        }

        if(!roleRepo.existsById(registerRequest.getIdRole())){
            return ResponseEntity.status(400).body("Wrong idRole!");
        }

        if(!registerRequest.getPassword().equals(registerRequest.getConfirmedPassword()) ){
            return ResponseEntity.status(400).body("Passwords don't match!");
        }

        User user = new User(
                roleRepo.findByIdRole(registerRequest.getIdRole()),
                registerRequest.getName(),
                registerRequest.getSurname(),
                encoder.encode(registerRequest.getPassword()),
                registerRequest.getPhoneNumber(),
                registerRequest.getEmail()
                );

        userRepo.save(user);
        return ResponseEntity.status(200).body("User registered!");
    }
}

