package pl.mateuszsitek.DogGo.model;

import com.sun.istack.NotNull;
import javax.persistence.*;

@Entity
public class Dogs {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_dog;
    @NotNull
    @ManyToOne
    @JoinColumn(name = "fk_id_author")
    private Users users;
    @NotNull
    private String title;
    @NotNull
    private String description;

    public Dogs(Users users, String title, String description) {
        this.users = users;
        this.title = title;
        this.description = description;
    }

    public Dogs(){
    }

    public Long getId_dog() {
        return id_dog;
    }

    public void setId_dog(Long id_dog) {
        this.id_dog = id_dog;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
