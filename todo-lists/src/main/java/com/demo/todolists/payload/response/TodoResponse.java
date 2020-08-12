package com.demo.todolists.payload.response;

import java.util.List;

import org.springframework.stereotype.Component;

import com.demo.todolists.Entity.Todo;

@Component
public class TodoResponse {
	private List<Todo> todos;
	private String message;
	

	public TodoResponse(List<Todo> todos, String message) {
		super();
		this.todos = todos;
		this.message = message;
	}

	public TodoResponse() {
		super();
	}
	
	public List<Todo> getTodos() {
		return todos;
	}

	public void setTodos(List<Todo> todos) {
		this.todos = todos;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
}
