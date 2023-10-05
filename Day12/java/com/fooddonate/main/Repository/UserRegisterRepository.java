package com.fooddonate.main.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fooddonate.main.Entity.UserRegisterEntity;

public interface UserRegisterRepository extends JpaRepository<UserRegisterEntity, Integer>{

}
