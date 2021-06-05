package pl.mateuszsitek.DogGo.services;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@Service
public class UploadsService {
    public void uploadFile(MultipartFile file) throws IOException {
        file.transferTo(new File("C:\\Users\\Mateusz\\Desktop\\DogGo\\frontend\\uploads\\"+file.getOriginalFilename()));
        System.out.println(file.getOriginalFilename());
    }
}
