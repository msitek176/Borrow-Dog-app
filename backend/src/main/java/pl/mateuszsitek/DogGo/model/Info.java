package pl.mateuszsitek.DogGo.model;

import com.sun.istack.NotNull;
import lombok.Data;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Data
@Entity
public class Info {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_info;

    @NotNull
    private String title;

    @NotNull
    private String description;

    public Info(){
    }

    public Info(String title, String description) {
        this.title = title;
        this.description = description;
    }

}
