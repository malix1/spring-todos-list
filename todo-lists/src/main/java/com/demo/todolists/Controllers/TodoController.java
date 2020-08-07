package com.demo.todolists.Controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.todolists.Entity.Todo;
import com.demo.todolists.responses.TodoResponse;
import com.demo.todolists.service.TodoService;


@RequestMapping("/api")
@CrossOrigin("http://localhost:8080")
@RestController
public class TodoController {
	
	@Autowired
	private TodoService todoService;
	@Autowired
	private TodoResponse response;
		
	@GetMapping(value="/todos")
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	public TodoResponse retrieveTodos() {
		response.setStatus("200");
		response.setMessage("All todos retrieved.");
		response.setTodos(todoService.getAllTodos());
		return response;
	}
	
	@PostMapping(value="/todos")
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	public TodoResponse saveTodos(@RequestBody  Map<String, List<Todo>> body) {
		List<Todo> todos = body.get("todos");
		todoService.insert(todos);	
		response.setTodos(todos);
		response.setStatus("200");
		response.setMessage("Todos saved successfuly.");
		return response;
	}
	
	@GetMapping("/todos/secured")
	@PreAuthorize("hasRole('MODERATOR') or hasRole('ADMIN')")
	public String securedTodos() {
		return "Secured";
	}
	
	@GetMapping(value="/")
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	public String indexTodo() {
		return "Welcome the api Urls";
	}
	
}
