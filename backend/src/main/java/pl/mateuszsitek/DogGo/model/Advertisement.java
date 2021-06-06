package pl.mateuszsitek.DogGo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.sun.istack.NotNull;
import lombok.Data;
import org.codehaus.jackson.annotate.JsonManagedReference;
import javax.persistence.*;

@Data
@Entity
public class Advertisement {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_advertisement;

    @JsonManagedReference
    @NotNull
    @ManyToOne
    @JoinColumn(name = "fk_id_user")
    private User users;

    @NotNull
    private String created_at;

    @JsonBackReference
    @OneToOne(mappedBy = "advertisement")
    private AdvertisementDetails advertisementDetails;

    @JsonManagedReference
    @OneToOne(mappedBy = "advertisement")
    private Reservation reservation;

    public Advertisement(){
    }

    public Advertisement(User users, String created_at) {
        this.users = users;
        this.created_at = created_at;
    }

    @Override
    public String toString() {
        return "Advertisement{" +
                "id_advertisement=" + id_advertisement +
                ", users=" + users.toString() +
                ", created_at='" + created_at + '\'' +
                ", advertisementDetails=" + advertisementDetails.toString() +
                ", reservation=" + reservation +
                '}';
    }
}
