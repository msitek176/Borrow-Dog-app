package pl.mateuszsitek.DogGo.model;

import com.sun.istack.NotNull;
import lombok.Data;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Table(name="users")
@Entity
public class User {

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

    @Column(nullable = false, unique=true, name = "email")
    private String email;

    @NotNull
    @Column(columnDefinition = "boolean default true")
    private Boolean enabled;

    @OneToOne(mappedBy = "users")
    private UserDetails userDetails;

    @OneToMany(
            mappedBy = "users",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    private List<Dog> dogs = new ArrayList<>();

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

    public User() {
    }

    public User(Role id_role, String name, String surname, String password, String phone_number, String email) {
        this.role = id_role;
        this.name = name;
        this.surname = surname;
        this.password = password;
        this.phone_number = phone_number;
        this.email = email;
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
                '}';
    }
}
