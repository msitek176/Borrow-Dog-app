package pl.mateuszsitek.DogGo.model;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name= "roles")
public class Role {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private ERole name;

    public Role(ERole name) {
        this.name = name;
    }

    public Role(){
    }


}
