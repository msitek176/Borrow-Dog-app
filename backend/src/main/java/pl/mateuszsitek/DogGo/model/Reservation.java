package pl.mateuszsitek.DogGo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.sun.istack.NotNull;
import lombok.Data;
import org.codehaus.jackson.annotate.JsonManagedReference;
import javax.persistence.*;

@Data
@Entity
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_reservation;

    @JsonBackReference
    @OneToOne
    @JoinColumn(name="advertisement_id", referencedColumnName = "id_advertisement")
    private Advertisement advertisement;

    @JsonManagedReference
    @NotNull
    @ManyToOne
    @JoinColumn(name = "fk_id_borrower")
    private User users;

    @NotNull
    private String created_at;

    public Reservation(){
    }

    public Reservation(Advertisement advertisement, User users, String created_at) {
        this.advertisement = advertisement;
        this.users = users;
        this.created_at = created_at;
    }
}
