package com.demo.todolists.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedQuery;

@Entity
@NamedQuery(name="find_all_todos", query="select t from Todo t")
public class Todo {
	
	@Id
	@GeneratedValue
	private int id;
	
	private String title;
	private boolean completed;
	
	public Todo(int id, String title, boolean completed) {
		super();
		this.id = id;
		this.title = title;
		this.completed = completed;
	}
	
	public Todo(String title, boolean completed) {
		super();
		this.title = title;
		this.completed = completed;
	}
	
	public Todo() {
		
	}

	public String gettitle() {
		return title;
	}

	public void settitle(String title) {
		this.title = title;
	}

	public boolean completed() {
		return completed;
	}

	public void setDone(boolean completed) {
		this.completed = completed;
	}
	
	
}
