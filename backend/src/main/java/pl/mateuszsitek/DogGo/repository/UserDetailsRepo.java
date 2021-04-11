package pl.mateuszsitek.DogGo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.mateuszsitek.DogGo.model.UserDetails;

@Repository
public interface UserDetailsRepo extends JpaRepository <UserDetails, Long> {
}
