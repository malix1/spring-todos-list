package com.demo.todolists.Controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.todolists.Entity.Todo;
import com.demo.todolists.responses.TodoResponse;
import com.demo.todolists.service.TodoService;

@CrossOrigin(origins = "http://localhost:8080")
@RequestMapping("/api")
@RestController
public class TodoController {
	
	@Autowired
	private TodoService todoService;
	@Autowired
	private TodoResponse response;
		
	@GetMapping(value="/todos")
	public TodoResponse retrieveTodos() {
		response.setStatus("200");
		response.setMessage("All todos retrieved.");
		response.setTodos(todoService.getAllTodos());
		return response;
	}
	
	@PostMapping(value="/todos",  produces = "application/json")
	public TodoResponse saveTodos(@RequestBody  Map<String, List<Todo>> todos) {
		todoService.insert(todos.get("todos"));	
		response.setStatus("200");
		response.setMessage("Todos saved successfuly.");
		return response;
	}
	
	@GetMapping(value="/")
	public String indexTodo() {
		return "Welcome the api Urls";
	}
	
}
