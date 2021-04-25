package pl.mateuszsitek.DogGo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import pl.mateuszsitek.DogGo.model.User;
import pl.mateuszsitek.DogGo.repository.UserRepo;
import java.util.Optional;

public class AuthUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<User> user = userRepo.findByEmail(email);
        if(user.isPresent())
            return new UserDetailsImpl(user.get());

        throw new UsernameNotFoundException("User not found");
    }

}