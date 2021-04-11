package pl.mateuszsitek.DogGo.model;

import com.sun.istack.NotNull;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Table(name="users")
@Entity
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_user;
    @NotNull
    @ManyToOne
    @JoinColumn(name = "fk_id_role")
    private Role role;
    @NotNull
    private String name;
    @NotNull
    private String surname;
    @NotNull
    private String password;
    @NotNull
    private String phone_number;
    @NotNull
    @Column(unique=true, name = "email")
    private String email;
    @NotNull
    private String salt;

    @OneToOne(mappedBy = "users")
    private UserDetails userDetails;

    @OneToMany(
            mappedBy = "users",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Dogs> dogs = new ArrayList<>();

    @OneToMany(
            mappedBy = "users",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Advertisement> advertisement = new ArrayList<>();

    @OneToMany(
            mappedBy = "users",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Reservation> reservation = new ArrayList<>();

    public Users() {
    }

    public Users(Role id_role, String name, String surname, String password, String phone_number, String email, String salt) {
        this.role = id_role;
        this.name = name;
        this.surname = surname;
        this.password = password;
        this.phone_number = phone_number;
        this.email = email;
        this.salt = salt;
    }

    public Long getId_user() {
        return id_user;
    }

    public void setId_user(Long id_user) {
        this.id_user = id_user;
    }

    public Role getId_role() {
        return role;
    }

    public void setId_role(Role id_role) {
        this.role = id_role;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSalt() {
        return salt;
    }

    public void setSalt(String salt) {
        this.salt = salt;
    }

    public UserDetails getUserDetails() {
        return userDetails;
    }

    public void setUserDetails(UserDetails userDetails) {
        this.userDetails = userDetails;
    }

    public List<Dogs> getDogs() {
        return dogs;
    }

    public void setDogs(List<Dogs> dogs) {
        this.dogs = dogs;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public List<Advertisement> getAdvertisement() {
        return advertisement;
    }

    public void setAdvertisement(List<Advertisement> advertisement) {
        this.advertisement = advertisement;
    }

    public List<Reservation> getReservation() {
        return reservation;
    }

    public void setReservation(List<Reservation> reservation) {
        this.reservation = reservation;
    }

    @Override
    public String toString() {
        return "Users{" +
                "id_user=" + id_user +
                ", id_role='" + role + '\'' +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", password='" + password + '\'' +
                ", phone_number='" + phone_number + '\'' +
                ", email='" + email + '\'' +
                ", salt='" + salt + '\'' +
                '}';
    }
}
