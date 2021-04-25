package pl.mateuszsitek.DogGo.model;

import com.sun.istack.NotNull;
import lombok.Data;
import javax.persistence.*;

@Data
@Entity
public class Advertisement {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_advertisement;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "fk_id_user")
    private User users;

    @NotNull
    private String created_at;

    @OneToOne(mappedBy = "advertisement")
    private AdvertisementDetails advertisementDetails;

    @OneToOne(mappedBy = "advertisement")
    private Reservation reservation;

    public Advertisement(){
    }

    public Advertisement(User users, String created_at) {
        this.users = users;
        this.created_at = created_at;
    }

}
