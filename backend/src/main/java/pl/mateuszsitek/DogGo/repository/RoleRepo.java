package pl.mateuszsitek.DogGo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.mateuszsitek.DogGo.model.Role;

@Repository
public interface RoleRepo extends JpaRepository<Role,Long> {
    Role findByIdRole(Long idRole);
}