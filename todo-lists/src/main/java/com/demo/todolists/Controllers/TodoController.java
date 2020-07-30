package com.demo.todolists.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@PostMapping("/todos")
	public List<Todo> saveTodos(@RequestBody List<Todo> todos) {
		return todoJpaRepository.update(todos);
	}
	
	@DeleteMapping("/todos/{id}")
	public String deleteTodoById(@RequestBody int id) {
		todoJpaRepository.deleteById(id);
		return "Todo deleted";
	}
	
	
	@GetMapping(value="/")
	public String indexTodo() {
		return "Welcome the api Urls";
	}
	
}
