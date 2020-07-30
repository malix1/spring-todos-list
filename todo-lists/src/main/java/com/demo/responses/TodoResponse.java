package com.demo.responses;

import java.util.List;

import com.demo.todolists.Entity.Todo;

public class TodoResponse {
	private List<Todo> todos;
	private String status;
	
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

	public TodoResponse(List<Todo> todos, String status) {
		super();
		this.todos = todos;
		this.status = status;
	}

	public TodoResponse() {
		super();
	}
	
}
