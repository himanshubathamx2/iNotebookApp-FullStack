package com.iNotebook.iNotebookBackend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.iNotebook.iNotebookBackend.models.ErrorObj;

@ControllerAdvice
public class RestExceptionHandler
{
	@ExceptionHandler
	public String handleException(Exception e)
	{
		return "exception came";
	}
	
	@ExceptionHandler
	public ResponseEntity<ErrorObj> handleRuntimeException(RuntimeException e)
	{
		ErrorObj error= new ErrorObj();error.setCode(400);error.setDescription(e.getMessage());
		return new ResponseEntity<ErrorObj>(error,HttpStatus.BAD_REQUEST);
	}
	
}
