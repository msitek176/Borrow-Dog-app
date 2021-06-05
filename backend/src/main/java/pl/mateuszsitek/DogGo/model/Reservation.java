package pl.mateuszsitek.DogGo.model;

import com.sun.istack.NotNull;
import lombok.Data;
import org.codehaus.jackson.annotate.JsonIgnore;

import javax.persistence.*;

@Data
@Entity
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_reservation;

    @JsonIgnore
    @OneToOne
    @JoinColumn(name="advertisement_id", referencedColumnName = "id_advertisement")
    private Advertisement advertisement;

    @JsonIgnore
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
