package pl.mateuszsitek.DogGo.payload.request;

import com.sun.istack.NotNull;
import lombok.Data;

@Data
public class LoginRequest {

    @NotNull
    private String email;

    @NotNull
    private String password;

}