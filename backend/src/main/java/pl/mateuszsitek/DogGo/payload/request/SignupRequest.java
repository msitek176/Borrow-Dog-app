package pl.mateuszsitek.DogGo.payload.request;

import com.sun.istack.NotNull;
import lombok.Data;
import java.util.Set;

@Data
public class SignupRequest {

    @NotNull
    private String email;
    @NotNull
    private Set<String> role;
    @NotNull
    private String password;
    @NotNull
    private String name;
    @NotNull
    private String surname;
    @NotNull
    private String confirmedPassword;
    @NotNull
    private String phoneNumber;

}