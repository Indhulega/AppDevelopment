package com.example.feedback.Service;

import java.util.List;
import org.springframework.stereotype.Service;

import com.example.feedback.Entity.FeedbackEntity; // Import the FeedbackEntity
import com.example.feedback.Repository.FeedbackRepository;
import com.example.feedback.dto.FeedbackRequest;
import com.example.feedback.dto.FeedbackResponse;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FeedbackService {
    private final FeedbackRepository feedbackRepository;

    public boolean addFeedback(FeedbackRequest feedbackRequest) {
        FeedbackEntity feedback = new FeedbackEntity(feedbackRequest.getEmail(), feedbackRequest.getRating());
        feedbackRepository.save(feedback);
        List<FeedbackEntity> feedbackData = feedbackRepository.findAll();
        return !feedbackData.isEmpty();
    }

    public List<FeedbackResponse> getFeedback() {
        List<FeedbackEntity> feedbacks = feedbackRepository.findAll();
        return feedbacks.stream().map(this::mapToFeedbackResponse).toList();
    }

    private FeedbackResponse mapToFeedbackResponse(FeedbackEntity feedback) {
        return FeedbackResponse.builder()
                .email(feedback.getEmail())
                .rating(feedback.getRating())
                .build();
    }
}
