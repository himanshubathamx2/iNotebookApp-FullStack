package com.iNotebook.iNotebookBackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.iNotebook.iNotebookBackend.DAO.UserRepository;
import com.iNotebook.iNotebookBackend.entity.User;

@Service
public class CustomDetailService implements UserDetailsService
{
	@Autowired
	private UserRepository userRepo;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException
	{
		User user=userRepo.findByEmail(username).orElseThrow(()->new RuntimeException("User not found"));
		return user;
	}

}
