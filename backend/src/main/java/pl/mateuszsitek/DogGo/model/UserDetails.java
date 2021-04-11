package pl.mateuszsitek.DogGo.model;

import javax.persistence.*;


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
    private Users users;

    public UserDetails(){
    }

    public UserDetails( String image, String about, String city) {
        this.image = image;
        this.about = about;
        this.city = city;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Long getId_user_details() {
        return id_user_details;
    }

    public void setId_user_details(Long id_user_details) {
        this.id_user_details = id_user_details;
    }

    public Users getUser() {
        return users;
    }

    public void setUser(Users users) {
        this.users = users;
    }
}
