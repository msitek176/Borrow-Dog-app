package pl.mateuszsitek.DogGo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.mateuszsitek.DogGo.model.Dogs;

@Repository
public interface DogsRepo extends JpaRepository <Dogs, Long> {
}
