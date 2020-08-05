package com.demo.todolists.Controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class HomeController {
	
	@GetMapping(value="/")
	public String homePage() {
		return "Welcome the api";
	}
	
	
}
