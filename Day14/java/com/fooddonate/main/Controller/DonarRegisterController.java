package com.fooddonate.main.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fooddonate.main.Entity.DonarRegisterEntity;
import com.fooddonate.main.Service.DonarRegisterService;

@RestController
@CrossOrigin
public class DonarRegisterController {
	@Autowired
	private DonarRegisterService donarRegisterService;
	@GetMapping("/getDonarRegister")
	public List<DonarRegisterEntity> getDonarRegister(){
		return donarRegisterService.getDonarRegister();
	}
	@GetMapping("/getDonarRegister/{id}")
	public Optional<DonarRegisterEntity> getDonarRegisterbyId(@PathVariable int id){
		return donarRegisterService.getDonarRegisterbyId(id);
	}
	@PostMapping("/postDonarRegister")
	public void postDonarRegister(@RequestBody DonarRegisterEntity ure) {
		donarRegisterService.postDonarRegister(ure);
	}
	@PutMapping("/putDonarRegister/{id}")
	public void putDonarRegister(@PathVariable int id,@RequestBody DonarRegisterEntity ure)
	{
		ure.setDonarRegisterId(id);
		donarRegisterService.putDonarRegister(ure);
	}
	@DeleteMapping("/delDonarRegister/{id}")
	public void deleteDonarRegister(@PathVariable int id)
	{
		donarRegisterService.deleteDonarRegister(id);
	}
	

}
