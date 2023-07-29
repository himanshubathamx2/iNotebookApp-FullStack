package com.iNotebook.iNotebookBackend.controller;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iNotebook.iNotebookBackend.entity.User;
import com.iNotebook.iNotebookBackend.models.JwtRequest;
import com.iNotebook.iNotebookBackend.models.JwtResponse;
import com.iNotebook.iNotebookBackend.security.JwtHelper;
import com.iNotebook.iNotebookBackend.service.UserService;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins="http://localhost:3000")
public class AuthController
{
	 @Autowired
	    private UserDetailsService userDetailsService;

	    @Autowired
	    private AuthenticationManager manager;

	    @Autowired
	    private JwtHelper helper;

	    private Logger logger = LoggerFactory.getLogger(AuthController.class);
	    
	    @Autowired
	    private UserService userService;

	    @PostMapping("/login")
	    public ResponseEntity<JwtResponse> login(@RequestBody JwtRequest request) {

	        this.doAuthenticate(request.getEmail(), request.getPassword());


	        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail());
	        String token = this.helper.generateToken(userDetails);

	        JwtResponse response = JwtResponse.builder()
	                .jwtToken(token)
	                .username(userDetails.getUsername()).build();
	        return new ResponseEntity<>(response, HttpStatus.OK);
	    }

	    private void doAuthenticate(String email, String password) {

	        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(email, password);
	        try {
	            manager.authenticate(authentication);


	        } catch (BadCredentialsException e) {
	            throw new BadCredentialsException(" Invalid Username or Password  !!");
	        }

	    }

	    @ExceptionHandler(BadCredentialsException.class)
	    public String exceptionHandler() {
	        return "Credentials Invalid !!";
	    }
	    
	    @PostMapping("/create-user")
	    public Object createUser(@RequestBody User user) throws IOException
	    {
	    	boolean userExist = userService.userExist(user.getEmail());
	    	if(!userExist)
	    	{
	    		User createdUser = userService.createUser(user);
	    		return createdUser;
	    	}
	    	else
	    	{
	    		throw new RuntimeException("User already present");

	    	}
	    		
	    }
}
