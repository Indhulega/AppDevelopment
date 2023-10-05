package com.fooddonate.main.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fooddonate.main.Entity.AdminLoginEntity;
import com.fooddonate.main.Repository.AdminLoginRepository;
@Service
public class AdminLoginService {
	@Autowired
	private AdminLoginRepository AdminLoginRepository;
	public List<AdminLoginEntity> getAdminLogin(){
		return AdminLoginRepository.findAll();
	}
	public Optional<AdminLoginEntity> getAdminLoginbyId(int id){
		return AdminLoginRepository.findById(id);
	}
	public void postAdminLogin(AdminLoginEntity ale) {
		AdminLoginRepository.save(ale);
	}

}
