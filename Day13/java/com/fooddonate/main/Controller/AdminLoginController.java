package com.fooddonate.main.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fooddonate.main.Entity.AdminLoginEntity;
import com.fooddonate.main.Service.AdminLoginService;
@RestController
public class AdminLoginController {
	@Autowired
	private AdminLoginService AdminLoginService;
	@GetMapping("/getAdminLogin")
	public List<AdminLoginEntity> getAdminLogin(){
		return AdminLoginService.getAdminLogin();
	}
	@GetMapping("/getAdminLogin/{id}")
	public Optional<AdminLoginEntity> getAdminLoginbyId(@PathVariable int id){
		return AdminLoginService.getAdminLoginbyId(id);
	}
	@PostMapping("/postAdminLogin")
	public void postAdminLogin(@RequestBody AdminLoginEntity ale) {
		AdminLoginService.postAdminLogin(ale);
	}

}
