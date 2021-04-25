package pl.mateuszsitek.DogGo.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.mateuszsitek.DogGo.model.User;
import pl.mateuszsitek.DogGo.repository.UserRepo;

import java.util.List;
@RestController
@RequiredArgsConstructor
public class UsersController {

    private final UserRepo usersRepo;

    @GetMapping("/users")
    public List<User> getUsers(){
        return usersRepo.findAll();
    }
}
