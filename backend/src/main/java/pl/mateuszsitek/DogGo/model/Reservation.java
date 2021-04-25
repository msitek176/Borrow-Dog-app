package pl.mateuszsitek.DogGo.model;

import com.sun.istack.NotNull;
import lombok.Data;
import javax.persistence.*;

@Data
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
    private User users;

    @NotNull
    private String created_at;
    private String note;

    public Reservation(){
    }

    public Reservation(Advertisement advertisement, User users, String created_at, String note) {
        this.advertisement = advertisement;
        this.users = users;
        this.created_at = created_at;
        this.note = note;
    }

}
