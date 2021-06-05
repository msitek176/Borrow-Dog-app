package pl.mateuszsitek.DogGo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.mateuszsitek.DogGo.model.AdvertisementDetails;
import pl.mateuszsitek.DogGo.model.Reservation;
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

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class ReservationController {
    @Autowired
    ReservationRepo reservationRepo;

    @Autowired
    AdvertisementRepo advertisementRepo;

    @Autowired
    UserRepo userRepo;

    @Autowired
    AdvertisementDetailsRepo advertisementDetailsRepo;

    @PostMapping("/reservation/{id_adv}/{id_user}")
    public ResponseEntity<?> reservation(@PathVariable int id_adv,@PathVariable int id_user){
        Date date = new Date();
        Format formatter = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
        String currentDate = formatter.format(date);

        Reservation reservation = new Reservation(
                advertisementRepo.getOne((long) id_adv),
                userRepo.getOne((long) id_user),
                currentDate
        );
        reservationRepo.save(reservation);

        return ResponseEntity.ok(new MessageResponse("Walk with dog reserved successfully!"));
    }

    @GetMapping("/my_reservations/{id}")
    public List<AdvertisementDetails> getReservation(@PathVariable int id) {
        List<AdvertisementDetails> advertisementDetailsList = new ArrayList<AdvertisementDetails>();

        List<Long> idAdvertisement = new ArrayList<Long>();
        reservationRepo.findAll().forEach(el -> {
            if (el.getUsers().getId() == id) idAdvertisement.add(el.getAdvertisement().getId_advertisement());
        });
        advertisementDetailsRepo.findAll().forEach(el -> {
            if (idAdvertisement.contains(el.getAdvertisement().getId_advertisement())) {
                advertisementDetailsList.add(el);
            }
        });

        return advertisementDetailsList;
    }

    @DeleteMapping("/my_reservations/{id}")
    public ResponseEntity<?> cancelReservation(@PathVariable int id){
        List <Reservation> reservationToCancel = new ArrayList<>();
        reservationRepo.findAll().forEach(el -> {if(el.getAdvertisement().getId_advertisement() == id){
             reservationToCancel.add(el);
        }
        });
        reservationRepo.delete(reservationToCancel.get(0));

        return ResponseEntity.ok(new MessageResponse("Cancel reservation successfully!"));

    }




}
