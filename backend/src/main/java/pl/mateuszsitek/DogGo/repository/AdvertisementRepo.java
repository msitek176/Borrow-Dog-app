package pl.mateuszsitek.DogGo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.mateuszsitek.DogGo.model.Advertisement;

@Repository
public interface AdvertisementRepo extends JpaRepository <Advertisement, Long> {
}
