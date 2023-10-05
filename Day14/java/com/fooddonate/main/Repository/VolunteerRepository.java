package com.fooddonate.main.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.fooddonate.main.Entity.VolunteerEntity;

@Repository
public interface VolunteerRepository extends JpaRepository<VolunteerEntity, Long> {
    // You can add custom query methods here if needed
}
