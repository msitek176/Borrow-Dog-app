package pl.mateuszsitek.DogGo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import pl.mateuszsitek.DogGo.services.UploadsService;
import java.io.IOException;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class UploadsController {

    @Autowired
    UploadsService uploadsService;

    @PostMapping("/uploads")
    public void uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
        uploadsService.uploadFile(file);
    }

}
