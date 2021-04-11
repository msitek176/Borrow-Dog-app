package pl.mateuszsitek.DogGo.model;

import com.sun.istack.NotNull;
import javax.persistence.*;

@Entity
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_reservation;

    @OneToOne
    @JoinColumn(name="advertisement_id", referencedColumnName = "id_advertisement")
    private Advertisement advertisement;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "fk_id_borrower")
    private Users users;

    @NotNull
    private String created_at;
    private String note;

    public Reservation(){
    }

    public Reservation(Advertisement advertisement, Users users, String created_at, String note) {
        this.advertisement = advertisement;
        this.users = users;
        this.created_at = created_at;
        this.note = note;
    }

    public Long getId_reservation() {
        return id_reservation;
    }

    public void setId_reservation(Long id_reservation) {
        this.id_reservation = id_reservation;
    }

    public Advertisement getAdvertisement() {
        return advertisement;
    }

    public void setAdvertisement(Advertisement advertisement) {
        this.advertisement = advertisement;
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

    public void setCreated_at(String created_at) {
        this.created_at = created_at;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }
}
