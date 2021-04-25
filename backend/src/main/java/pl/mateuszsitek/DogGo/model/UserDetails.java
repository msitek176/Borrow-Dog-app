package pl.mateuszsitek.DogGo.model;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name="user_details")
public class UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_user_details;
    private String image;
    private String about;
    private String city;

    @OneToOne
    @JoinColumn(name="user_id", referencedColumnName = "id_user")
    private User users;

    public UserDetails(){
    }

    public UserDetails( String image, String about, String city) {
        this.image = image;
        this.about = about;
        this.city = city;
    }

}
