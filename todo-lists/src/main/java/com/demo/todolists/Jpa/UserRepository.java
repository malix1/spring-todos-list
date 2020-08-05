package com.demo.todolists.Jpa;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.todolists.Entity.User;

public interface UserRepository extends JpaRepository<User, Long>{
	User findUserByUsername(String username);

}
