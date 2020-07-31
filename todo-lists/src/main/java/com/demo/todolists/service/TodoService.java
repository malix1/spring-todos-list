package com.demo.todolists.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.todolists.Entity.Todo;
import com.demo.todolists.Jpa.TodoRepository;

@Service
public class TodoService {
	
	@Autowired
	private TodoRepository todoRepository;
	
	public List<Todo> getAllTodos() {
		return todoRepository.findAll();
	}
	
	public void insert(List<Todo> todos) {
		todoRepository.saveAll(todos);
	}

}
