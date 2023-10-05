package com.fooddonate.main.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fooddonate.main.Entity.DonarRegisterEntity;
import com.fooddonate.main.Repository.DonarRegisterRepository;
@Service
public class DonarRegisterService {

	@Autowired
	private DonarRegisterRepository donarRegisterRepository;
	public List<DonarRegisterEntity> getDonarRegister(){
		return donarRegisterRepository.findAll();
	}
	public Optional<DonarRegisterEntity> getDonarRegisterbyId(int id)
	{
		return donarRegisterRepository.findById(id);
	}
	public void postDonarRegister(DonarRegisterEntity ure) {
		donarRegisterRepository.save(ure);
	}
	public DonarRegisterEntity putDonarRegister(DonarRegisterEntity ure) {
		return donarRegisterRepository.save(ure);
	}
	public void deleteDonarRegister(int id) {
		donarRegisterRepository.deleteById(id);
	}
}
