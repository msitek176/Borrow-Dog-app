package pl.mateuszsitek.DogGo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.mateuszsitek.DogGo.model.AdvertisementDetails;

@Repository
public interface AdvertisementDetailsRepo extends JpaRepository<AdvertisementDetails, Long> {
}
