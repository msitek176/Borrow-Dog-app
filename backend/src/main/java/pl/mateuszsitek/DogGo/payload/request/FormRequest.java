package pl.mateuszsitek.DogGo.payload.request;

import com.sun.istack.NotNull;
import lombok.Data;


@Data
public class FormRequest {
    @NotNull
    private String email;
    @NotNull
    private String dogName;
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
    private String from;
    @NotNull
    private String to;
    @NotNull
    private String photo;
}
