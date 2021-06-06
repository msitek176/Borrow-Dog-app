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
    private String lifetime;

    @NotNull
    private String title;

    @NotNull
    private String origin;

    @NotNull
    private String character;

    @NotNull
    private String weight;

    @NotNull
    private String height;

    @NotNull
    private String imageURL;

    public Dog(Long id_dog, String lifetime, String origin, String character, String weight, String height,String imageURL, String title) {
        this.id_dog = id_dog;
        this.lifetime = lifetime;
        this.origin = origin;
        this.character = character;
        this.weight = weight;
        this.height = height;
        this.imageURL = imageURL;
        this.title=title;
    }

    public Dog(){
    }

}
