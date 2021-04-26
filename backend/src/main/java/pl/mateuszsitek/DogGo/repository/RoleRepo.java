package pl.mateuszsitek.DogGo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.mateuszsitek.DogGo.model.ERole;
import pl.mateuszsitek.DogGo.model.Role;
import java.util.Optional;

@Repository
public interface RoleRepo extends JpaRepository<Role,Long> {
    Optional<Role> findByName(ERole name);
}