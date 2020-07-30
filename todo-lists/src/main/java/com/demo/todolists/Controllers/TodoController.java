package com.demo.todolists.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.todolists.Entity.Todo;
import com.demo.todolists.Jpa.TodoJpaRepository;

@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/api")
@RestController
public class TodoController {
	
	@Autowired
	private TodoJpaRepository todoJpaRepository;
	
	@GetMapping("/todos")
	public List<Todo> retrieveTodos() {
		return todoJpaRepository.findAll();
	}
	
	@GetMapping(value="/")
	public String indexTodo() {
		return "Welcome the api Urls";
	}
	
}
