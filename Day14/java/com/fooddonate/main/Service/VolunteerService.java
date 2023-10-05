package com.fooddonate.main.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import com.fooddonate.main.Entity.VolunteerEntity;
import com.fooddonate.main.Repository.VolunteerRepository;

@Service
public class VolunteerService {

	@Autowired
    private  VolunteerRepository volunteerRepository;

    public VolunteerService(VolunteerRepository volunteerRepository) {
        this.volunteerRepository = volunteerRepository;
    }

    public List<VolunteerEntity> getAllVolunteers() {
        return volunteerRepository.findAll();
    }

    public Optional<VolunteerEntity> getVolunteerById(Long id) {
        return volunteerRepository.findById(id);
    }

    public void createVolunteer(VolunteerEntity volunteer) {
        volunteerRepository.save(volunteer);
    }

    public VolunteerEntity updateVolunteer(VolunteerEntity volunteer) {
        return volunteerRepository.save(volunteer);
    }

    public void deleteVolunteer(Long id) {
        volunteerRepository.deleteById(id);
    }
}
