package pl.mateuszsitek.DogGo.controller;


import org.aspectj.weaver.patterns.IToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import pl.mateuszsitek.DogGo.model.Advertisement;
import pl.mateuszsitek.DogGo.model.AdvertisementDetails;
import pl.mateuszsitek.DogGo.model.User;
import pl.mateuszsitek.DogGo.model.UserDetails;
import pl.mateuszsitek.DogGo.payload.request.FormRequest;
import pl.mateuszsitek.DogGo.payload.response.MessageResponse;
import pl.mateuszsitek.DogGo.repository.AdvertisementDetailsRepo;
import pl.mateuszsitek.DogGo.repository.AdvertisementRepo;
import pl.mateuszsitek.DogGo.repository.UserRepo;

import javax.xml.crypto.Data;
import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class AdvertisementController {
    @Autowired
    AdvertisementRepo advertisementRepo;

    @Autowired
    AdvertisementDetailsRepo advertisementDetailsRepo;

    @Autowired
    UserRepo userRepo;
/*
    User currentUser = new User();
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

    public void setCurrentUser(Authentication authentication) {
        authentication = SecurityContextHolder.getContext().getAuthentication();
        this.currentUser = (User)authentication.getPrincipal();
    }

    String username = "";

    public void setUsername(User currentUser) {
        this.username = currentUser.getEmail();
    }
*/
    Date date = new Date();
    Format formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
    String currentDate = formatter.format(date);

    @PostMapping("/advertisements")
    public ResponseEntity<?> addAdvertisement (@RequestBody FormRequest formRequest) {
        System.out.println(formRequest);

        Optional<User> currentUser = userRepo.findByEmail(formRequest.getEmail());
        User u = currentUser.get();

        Advertisement advertisement = new Advertisement(
                u,
                currentDate
        );
        AdvertisementDetails advertisementDetails = new AdvertisementDetails(
                formRequest.getDogName(),
                formRequest.getBreed(),
                formRequest.getDescription(),
                formRequest.getCity(),
                formRequest.getVoivodeship(),
                formRequest.getStreet(),
                formRequest.getFrom(),
                formRequest.getTo(),
                formRequest.getPhoto(),
                advertisement
        );
        advertisementRepo.save(advertisement);
        advertisementDetailsRepo.save(advertisementDetails);

        return ResponseEntity.ok(new MessageResponse("Advertisement added successfully!"));

    }

    @GetMapping("/advertisements")
    public List<AdvertisementDetails> getAllAdvertisements(){
        return advertisementDetailsRepo.findAll();
    }

    @GetMapping("/advertisements/{id}")
    public List<AdvertisementDetails> getAdvertisements(@PathVariable int id){
        List <AdvertisementDetails> advertisementDetailsList = new ArrayList<AdvertisementDetails>();

        List <Long> idAdvertisement = new ArrayList<Long>();
        advertisementRepo.findAll().forEach(el -> {if(el.getUsers().getId()==id) idAdvertisement.add(el.getId_advertisement()); });
        advertisementDetailsRepo.findAll().forEach(el -> {if(idAdvertisement.contains(el.getAdvertisement().getId_advertisement()))
        {advertisementDetailsList.add(el);}});

        return advertisementDetailsList;
    }

}
