package pl.mateuszsitek.DogGo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.mateuszsitek.DogGo.model.Reservation;

@Repository
public interface ReservationRepo extends JpaRepository<Reservation, Long> {
}
