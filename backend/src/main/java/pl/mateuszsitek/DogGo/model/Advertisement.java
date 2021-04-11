package pl.mateuszsitek.DogGo.model;

import com.sun.istack.NotNull;
import javax.persistence.*;

@Entity
public class Advertisement {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_advertisement;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "fk_id_user")
    private Users users;

    @NotNull
    private String created_at;

    @OneToOne(mappedBy = "advertisement")
    private AdvertisementDetails advertisementDetails;

    @OneToOne(mappedBy = "advertisement")
    private Reservation reservation;

    public Advertisement(){
    }

    public Advertisement(Users users, String created_at) {
        this.users = users;
        this.created_at = created_at;
    }

    public Long getId_advertisement() {
        return id_advertisement;
    }

    public void setId_advertisement(Long id_advertisement) {
        this.id_advertisement = id_advertisement;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public String getCreated_at() {
        return created_at;
    }

    public void setCreated_at(String creaed_at) {
        this.created_at = creaed_at;
    }

    public AdvertisementDetails getAdvertisementDetails() {
        return advertisementDetails;
    }

    public void setAdvertisementDetails(AdvertisementDetails advertisementDetails) {
        this.advertisementDetails = advertisementDetails;
    }
    public Reservation getReservation() {
        return reservation;
    }

    public void setReservation(Reservation reservation) {
        this.reservation = reservation;
    }
}
