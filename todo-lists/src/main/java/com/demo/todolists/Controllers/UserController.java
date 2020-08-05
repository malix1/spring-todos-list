package com.demo.todolists.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.demo.todolists.Entity.User;
import com.demo.todolists.Jpa.UserRepository;

@Controller
@RequestMapping("/users")
public class UserController {

	private UserRepository userRepository;
	private BCryptPasswordEncoder passwordEncoder;
	
	@Autowired
	public UserController(UserRepository userRepository, BCryptPasswordEncoder passwordEncoder) {
		super();
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
	}
	
	@PostMapping("/sign-up")
	public void signUp(@RequestBody User user) {
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		userRepository.save(user);
	}
	
	 
}
