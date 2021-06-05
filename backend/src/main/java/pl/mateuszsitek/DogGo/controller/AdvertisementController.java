package pl.mateuszsitek.DogGo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.mateuszsitek.DogGo.model.Advertisement;
import pl.mateuszsitek.DogGo.model.AdvertisementDetails;
import pl.mateuszsitek.DogGo.model.Reservation;
import pl.mateuszsitek.DogGo.model.User;
import pl.mateuszsitek.DogGo.payload.request.FormRequest;
import pl.mateuszsitek.DogGo.payload.response.MessageResponse;
import pl.mateuszsitek.DogGo.repository.AdvertisementDetailsRepo;
import pl.mateuszsitek.DogGo.repository.AdvertisementRepo;
import pl.mateuszsitek.DogGo.repository.ReservationRepo;
import pl.mateuszsitek.DogGo.repository.UserRepo;

import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicReference;

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

    @Autowired
    ReservationRepo reservationRepo;
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

    @GetMapping("/advertisementsOthers/{id}")
    public List<AdvertisementDetails> getAdvertisementsOthers(@PathVariable int id){
        List <AdvertisementDetails> advertisementDetailsList = new ArrayList<AdvertisementDetails>();

        List <Long> idAdvertisement = new ArrayList<Long>();

        advertisementRepo.findAll().forEach(el -> {if(el.getUsers().getId()!=id && (((reservationRepo.findAll().stream().filter(reserv -> reserv.getAdvertisement().getId_advertisement()== el.getId_advertisement()).findAny()).stream().count() >0) ? false : true)) idAdvertisement.add(el.getId_advertisement()); });
        advertisementDetailsRepo.findAll().forEach(el -> {if(idAdvertisement.contains(el.getAdvertisement().getId_advertisement()))
        {advertisementDetailsList.add(el);}});

        return advertisementDetailsList;
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

    @DeleteMapping("/advertisement/{id}")
    public ResponseEntity<?> deleteAdvertisement(@PathVariable int id){
        List <AdvertisementDetails> advertisementDetailsList = new ArrayList<>();
         advertisementDetailsRepo.findAll().forEach(el -> {
             System.out.println("ID AD:" + el.getAdvertisement().getId_advertisement());
         if(el.getAdvertisement().getId_advertisement() == id){
             System.out.println("TEST:"+ el.getAdvertisement().getId_advertisement());
            advertisementDetailsList.add(el);

        }});

        List <Reservation> reservationToDeleteList = new ArrayList<>();
        reservationRepo.findAll().forEach(el -> {
            if(el.getAdvertisement().getId_advertisement() == id)
                reservationToDeleteList.add(el);
        });

        reservationRepo.delete(reservationToDeleteList.get(0));
        advertisementDetailsRepo.delete(advertisementDetailsList.get(0));
        advertisementRepo.delete(advertisementRepo.getOne((long) id));
        return ResponseEntity.ok(new MessageResponse("Advertisement delete successfully!"));
    }


}
