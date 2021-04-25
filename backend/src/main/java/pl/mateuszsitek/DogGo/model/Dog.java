package pl.mateuszsitek.DogGo.model;

import com.sun.istack.NotNull;
import lombok.Data;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import javax.persistence.*;

@RequestMapping(value="/api/dogs",method = RequestMethod.GET)
@Table(name = "dogs")
@Data
@Entity
public class Dog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_dog;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "fk_id_author")
    private User users;

    @NotNull
    private String title;

    @NotNull
    private String description;

    public Dog(User users, String title, String description) {
        this.users = users;
        this.title = title;
        this.description = description;
    }

    public Dog(){
    }

}
