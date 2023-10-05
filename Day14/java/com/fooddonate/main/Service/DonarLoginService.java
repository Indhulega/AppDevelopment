package com.fooddonate.main.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fooddonate.main.Entity.DonarLoginEntity;
import com.fooddonate.main.Repository.DonarLoginRepository;

@Service
public class DonarLoginService {

	@Autowired
	private DonarLoginRepository donarLoginRepository;
	
	public List<DonarLoginEntity> getDonarLogin(){
		return donarLoginRepository.findAll();
	}
	public Optional<DonarLoginEntity> getDonarLoginbyId(int id){
		return donarLoginRepository.findById(id);
	}
	public void postDonarLogin(DonarLoginEntity ulr) {
		donarLoginRepository.save(ulr);
	}
}
