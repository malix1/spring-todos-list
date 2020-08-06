package com.demo.todolists.Jpa;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.todolists.Entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	Optional<User> findUserByUsername(String username);

	Boolean existsByUsername(String username);
	
	Boolean existsByEmail(String email);
}
