package com.demo.todolists.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Todo {
	
	@Id
	@GeneratedValue
	private int id;
	
	private String name;
	private boolean isDone;
	
	public Todo(int id, String name, boolean isDone) {
		super();
		this.id = id;
		this.name = name;
		this.isDone = isDone;
	}
	
	public Todo(String name, boolean isDone) {
		super();
		this.name = name;
		this.isDone = isDone;
	}
	
	public Todo() {
		
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean isDone() {
		return isDone;
	}

	public void setDone(boolean isDone) {
		this.isDone = isDone;
	}
	
	
}
