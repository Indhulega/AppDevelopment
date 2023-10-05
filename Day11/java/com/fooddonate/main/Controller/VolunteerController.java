package com.fooddonate.main.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import com.fooddonate.main.Entity.VolunteerEntity;
import com.fooddonate.main.Service.VolunteerService;

@RestController
@RequestMapping("/volunteers")
public class VolunteerController {


    @Autowired
    private final VolunteerService volunteerService;
    public VolunteerController(VolunteerService volunteerService) {
        this.volunteerService = volunteerService;
    }

    @GetMapping
    public ResponseEntity<List<VolunteerEntity>> getAllVolunteers() {
        List<VolunteerEntity> volunteers = volunteerService.getAllVolunteers();
        return ResponseEntity.ok(volunteers);
    }

    @GetMapping("/{id}")
    public ResponseEntity<VolunteerEntity> getVolunteerById(@PathVariable Long id) {
        Optional<VolunteerEntity> volunteer = volunteerService.getVolunteerById(id);
        return volunteer.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<VolunteerEntity> createVolunteer(@RequestBody VolunteerEntity volunteer) {
        volunteerService.createVolunteer(volunteer);
        return ResponseEntity.ok(volunteer);
    }

    @PutMapping("/{id}")
    public ResponseEntity<VolunteerEntity> updateVolunteer(@PathVariable Long id, @RequestBody VolunteerEntity updatedVolunteer) {
        updatedVolunteer.setId(id);
        VolunteerEntity volunteer = volunteerService.updateVolunteer(updatedVolunteer);
        if (volunteer != null) {
            return ResponseEntity.ok(volunteer);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVolunteer(@PathVariable Long id) {
        volunteerService.deleteVolunteer(id);
        return ResponseEntity.noContent().build();
    }
}
