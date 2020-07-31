package com.demo.todolists.responses;

import java.util.List;

import org.springframework.stereotype.Component;

import com.demo.todolists.Entity.Todo;

@Component
public class TodoResponse {
	private List<Todo> todos;
	private String status;
	private String message;
	
	public List<Todo> getTodos() {
		return todos;
	}

	public void setTodos(List<Todo> todos) {
		this.todos = todos;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public TodoResponse(List<Todo> todos, String status, String message) {
		super();
		this.todos = todos;
		this.status = status;
		this.message = message;
	}

	public TodoResponse() {
		super();
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
}
