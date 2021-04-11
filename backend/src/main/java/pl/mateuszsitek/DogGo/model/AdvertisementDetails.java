package pl.mateuszsitek.DogGo.model;

import com.sun.istack.NotNull;
import javax.persistence.*;

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
    @NotNull
    private String type;

    @OneToOne
    @JoinColumn(name="advertisement_id", referencedColumnName = "id_advertisement")
    private Advertisement advertisement;

    public AdvertisementDetails(){
    }

    public AdvertisementDetails(String dog_name, String breed, String description, String city, String voivodeship, String street, String start, String stop, String image, String type) {
        this.dog_name = dog_name;
        this.breed = breed;
        this.description = description;
        this.city = city;
        this.voivodeship = voivodeship;
        this.street = street;
        this.start = start;
        this.stop = stop;
        this.image = image;
        this.type = type;
    }

    public Long getId_advertisement_details() {
        return id_advertisement_details;
    }

    public void setId_advertisement_details(Long id_advertisement_details) {
        this.id_advertisement_details = id_advertisement_details;
    }

    public String getDog_name() {
        return dog_name;
    }

    public void setDog_name(String dog_name) {
        this.dog_name = dog_name;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getVoivodeship() {
        return voivodeship;
    }

    public void setVoivodeship(String voivodeship) {
        this.voivodeship = voivodeship;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getStart() {
        return start;
    }

    public void setStart(String from) {
        this.start = from;
    }

    public String getStop() {
        return stop;
    }

    public void setStop(String to) {
        this.stop = to;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Advertisement getAdvertisement() {
        return advertisement;
    }

    public void setAdvertisement(Advertisement advertisement) {
        this.advertisement = advertisement;
    }
}
