package com.iNotebook.iNotebookBackend.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iNotebook.iNotebookBackend.entity.User;
import com.iNotebook.iNotebookBackend.security.JwtAuthenticationFilter;
import com.iNotebook.iNotebookBackend.service.UserService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/home")
public class HomeController
{
	@Autowired
	UserService userService;
	
	@Autowired
	JwtAuthenticationFilter f;
	
	//http://lh:8000/home/users
	@GetMapping("/users")
	public List<User> getUser()
	{
		System.out.println("getting users");
		return userService.getUsers();
	}
	
	@GetMapping("/current-user")
	public String getLoggedInUser(Principal principal)
	{
		return  principal.getName();
	}
	
	@GetMapping("/test")
	public String nf(HttpServletRequest request)
	{
		String identity = userService.getIdentity(request);
		return "success "+identity;
	}
	
}
