package com.iNotebook.iNotebookBackend.security;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Locale;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;



@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint
{
	
	@Autowired
	private MessageSource messageSource;
	
	    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
	    	String message = messageSource.getMessage(authException.getMessage(),null,null, Locale.getDefault());    	
	    	 if(message == null) message = authException.getMessage();

	    	    Error res= new Error();
	    	    res.setCode("488");
	    	    res.setDesc(message);

	    	    String jsonString = new ObjectMapper().writeValueAsString(res);

	    	    response.setContentType("application/json");
	    	    response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
	    	    response.getOutputStream().println(jsonString);
	    }


}
