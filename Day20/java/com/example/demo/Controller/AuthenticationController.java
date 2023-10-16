package com.example.demo.Controller;


import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.dto.Request.AuthenticationRequest;
import com.example.demo.dto.Request.RegisterRequest;
import com.example.demo.dto.Response.AuthenticationResponse;
import com.example.demo.Entity.UserRegister;
import com.example.demo.Service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin("*")
@RequestMapping("/auth")	
@RequiredArgsConstructor
public class AuthenticationController {
	
	private final AuthenticationService service;
	@PostMapping("/register")
	 public ResponseEntity<String> register(
		      @RequestBody RegisterRequest request
		  ) {
		service.register(request);
		    return ResponseEntity.ok("Registered Successfully");
		  }
		  @PostMapping("/authenticate")
		  public ResponseEntity<AuthenticationResponse> authenticate(
		      @RequestBody AuthenticationRequest request
		  ) {
		    return ResponseEntity.ok(service.authenticate(request));
		  }
		  @GetMapping("/users")
		    public ResponseEntity<List<UserRegister>> getAllUsers() {
		        List<UserRegister> users = service.getAllUsers();
		        return ResponseEntity.ok(users);
		    }

		    @DeleteMapping("/users/{userId}")
		    public ResponseEntity<String> deleteUser(@PathVariable Long userId) {
		        service.deleteUser(userId);
		        return ResponseEntity.ok("User deleted successfully");
		    }
		    


}