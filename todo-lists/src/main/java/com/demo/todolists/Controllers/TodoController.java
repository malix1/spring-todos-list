package com.demo.todolists.Controllers;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.responses.TodoResponse;
import com.demo.todolists.Entity.Todo;
import com.demo.todolists.Jpa.TodoJpaRepository;

@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/api")
@RestController
public class TodoController {
	
	@Autowired
	private TodoJpaRepository todoJpaRepository;
	private TodoResponse response;
		
	@GetMapping(value="/todos",  produces = "application/json")
	public TodoResponse retrieveTodos() {
		response = new TodoResponse();
		response.setStatus("200");
		response.setTodos(todoJpaRepository.findAll());
		return response;
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
