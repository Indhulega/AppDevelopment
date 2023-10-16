package com.example.feedback.Repository;

import com.example.feedback.Entity.FeedbackEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FeedbackRepository extends JpaRepository<FeedbackEntity, Long> {
    // Define custom query methods if needed
}
