package com.demo.todolists.Jpa;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.demo.todolists.Entity.Todo;

@Repository
public class TodoJpaRepository {
	@PersistenceContext
	EntityManager entityManager;
	
	public List<Todo> findAll(){
		TypedQuery<Todo> namedQuery = entityManager.createNamedQuery("find_all_todos", Todo.class);
		return namedQuery.getResultList();
	}
	
	public Todo findById(int id) {
		return entityManager.find(Todo.class, id);
	}
	
	public List<Todo> update(List<Todo> todo) {
		return entityManager.merge(todo);
	}
	
	public void deleteById(int id) {
		Todo todo = findById(id);
		entityManager.remove(todo);
	}
}
