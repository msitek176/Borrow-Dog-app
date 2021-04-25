package pl.mateuszsitek.DogGo.model;

import lombok.Data;

@Data
public class RegisterRequest {

        private Long idRole;
        private String name;
        private String surname;
        private String password;
        private String confirmedPassword;
        private String email;
        private String phoneNumber;

    }
