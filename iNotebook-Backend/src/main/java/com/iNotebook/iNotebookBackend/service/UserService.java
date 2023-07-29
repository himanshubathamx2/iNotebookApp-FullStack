package com.iNotebook.iNotebookBackend.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.iNotebook.iNotebookBackend.DAO.UserRepository;
import com.iNotebook.iNotebookBackend.entity.User;
import com.iNotebook.iNotebookBackend.security.JwtHelper;

import jakarta.servlet.http.HttpServletRequest;

@Service
public class UserService
{
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private JwtHelper jwtHelper; 
	
	public List<User> getUsers()
	{
		return userRepository.findAll();
	}
	
	public boolean userExist(String email)
	{
		Optional<User> result = userRepository.findByEmail(email);
		 boolean exist = false;
			if (result.isPresent())
				exist = true;
			else exist= false;
			return exist;
	}
	
	public User getUser(String email)
	{
		 Optional<User> result = userRepository.findByEmail(email);
		 User theUser = null;
			if (result.isPresent()) {
				theUser = result.get();
			}
			else {
				// we didn't find the employee
				throw new RuntimeException("Not found - " + email);
			}
			
			return theUser;
	}
	
	public User createUser(User	user)
	{
		user.setId(UUID.randomUUID().toString());
		user.setPassword(passwordEncoder.encode(user.getPassword()));
		return userRepository.save(user);
	}
	
	public String getIdentity(HttpServletRequest request)
	{
    String requestHeader = request.getHeader("Authorization");
    String token = requestHeader.substring(7);
    String username = this.jwtHelper.getUsernameFromToken(token);
    return username;

	}
	
}
