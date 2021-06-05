package pl.mateuszsitek.DogGo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.mateuszsitek.DogGo.model.Dog;
import pl.mateuszsitek.DogGo.repository.DogRepo;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class DogsInfoController {
    @Autowired
    DogRepo dogRepo;

    @GetMapping("/dogs")
    public List<Dog> dogs(){
        return dogRepo.findAll();
    }
}
