package pl.mateuszsitek.DogGo.model;

import com.sun.istack.NotNull;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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

    public Long getId_info() {
        return id_info;
    }

    public void setId_info(Long id_info) {
        this.id_info = id_info;
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
