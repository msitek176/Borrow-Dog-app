package pl.mateuszsitek.DogGo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.sun.istack.NotNull;
import lombok.Data;
import org.codehaus.jackson.annotate.JsonIgnore;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;
import org.codehaus.jackson.annotate.JsonManagedReference;

import javax.persistence.*;

@Data
@Entity
@Table(name = "advertisement_details")
public class AdvertisementDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id_advertisement_details;

    @NotNull
    private String dog_name;

    @NotNull
    private String breed;

    @NotNull
    private String description;

    @NotNull
    private String city;

    @NotNull
    private String voivodeship;

    @NotNull
    private String street;

    @NotNull
    private String start;

    @NotNull
    private String stop;

    @NotNull
    private String image;

    @JsonManagedReference
    @OneToOne
    @JoinColumn(name="advertisement_id", referencedColumnName = "id_advertisement")
    private Advertisement advertisement;

    public AdvertisementDetails(){
    }

    public AdvertisementDetails(String dog_name, String breed, String description, String city, String voivodeship, String street, String start, String stop, String image, Advertisement advertisement) {
        this.dog_name = dog_name;
        this.breed = breed;
        this.description = description;
        this.city = city;
        this.voivodeship = voivodeship;
        this.street = street;
        this.start = start;
        this.stop = stop;
        this.image = image;
        this.advertisement = advertisement;

    }

    @Override
    public String toString() {
        return "AdvertisementDetails{" +
                "id_advertisement_details=" + id_advertisement_details +
                ", dog_name='" + dog_name + '\'' +
                ", breed='" + breed + '\'' +
                ", description='" + description + '\'' +
                ", city='" + city + '\'' +
                ", voivodeship='" + voivodeship + '\'' +
                ", street='" + street + '\'' +
                ", start='" + start + '\'' +
                ", stop='" + stop + '\'' +
                ", image='" + image + '\'' +
                ", advertisement=" + advertisement.toString() +
                '}';
    }
}
