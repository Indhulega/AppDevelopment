package com.fooddonate.main.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fooddonate.main.Entity.DonarLoginEntity;
public interface DonarLoginRepository extends JpaRepository<DonarLoginEntity, Integer>{

}
