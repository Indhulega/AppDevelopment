package com.fooddonate.main.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fooddonate.main.Entity.UserLoginEntity;
public interface UserLoginRepository extends JpaRepository<UserLoginEntity, Integer>{

}
