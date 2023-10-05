package com.fooddonate.main.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fooddonate.main.Entity.DonarLoginEntity;
import com.fooddonate.main.Service.DonarLoginService;

@RestController
@CrossOrigin
public class DonarLoginController {
	@Autowired
	private DonarLoginService donarLoginService;

	@GetMapping("/getDonarLogin")
	public List<DonarLoginEntity> getDonarLogin() {
		return donarLoginService.getDonarLogin();
	}

	@GetMapping("/getDonarLogin/{id}")
	public Optional<DonarLoginEntity> getDonarLoginbyId(@PathVariable int id) {
		return donarLoginService.getDonarLoginbyId(id);
	}

	@PostMapping("/postDonarLogin")
	public void postDonarLogin(@RequestBody DonarLoginEntity ule) {
		donarLoginService.postDonarLogin(ule);
	}

}