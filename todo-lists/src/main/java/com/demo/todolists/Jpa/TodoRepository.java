package com.demo.todolists.Jpa;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.todolists.Entity.Todo;


@Repository
public interface TodoRepository extends JpaRepository<Todo, Integer>{
	 
}