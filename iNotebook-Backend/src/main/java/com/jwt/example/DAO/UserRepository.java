package com.jwt.example.DAO;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iNotebook.iNotebookBackend.entity.User;

public interface UserRepository extends JpaRepository<User, String>
{
	public Optional<User> findByEmail(String email); 
}
