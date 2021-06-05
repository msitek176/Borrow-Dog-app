package pl.mateuszsitek.DogGo.model;

import lombok.Data;
import org.codehaus.jackson.annotate.JsonIgnore;

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

    @JsonIgnore
    @OneToOne
    @JoinColumn(name="user_id", referencedColumnName = "id")
    private User users;

    public UserDetails(){
    }

    public UserDetails( String image, String about, String city) {
        this.image = image;
        this.about = about;
        this.city = city;
    }

}
