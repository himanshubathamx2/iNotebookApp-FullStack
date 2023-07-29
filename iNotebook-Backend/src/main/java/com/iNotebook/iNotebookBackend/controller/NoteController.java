package com.iNotebook.iNotebookBackend.controller;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.iNotebook.iNotebookBackend.DAO.NoteRepository;
import com.iNotebook.iNotebookBackend.entity.Note;
import com.iNotebook.iNotebookBackend.service.NoteService;
import com.iNotebook.iNotebookBackend.service.UserService;

import jakarta.servlet.http.HttpServletRequest;


@RestController
@RequestMapping("/notes")
@CrossOrigin(origins="http://localhost:3000")
public class NoteController
{	
	@Autowired
	NoteService noteService;
	
	@Autowired
	UserService userService;
	
	@Autowired
	NoteRepository noteRepository;
	
	@PostMapping(value="/addnote", produces="application/json")
	public Note addNote(@RequestBody String req, HttpServletRequest reqq)
	{	
		JSONObject reqJson= new JSONObject(req);
		String title = reqJson.getString("title");
		String desc= reqJson.getString("title");
		String tag= reqJson.getString("tag");
		Note note= new Note();
		note.setId(UUID.randomUUID().toString());
		note.setTitle(title);
		note.setDescription(desc);
		note.setTag(tag);
		note.setDate(new Date());
		return noteService.addNote(note, reqq);
	}
	
	
	@GetMapping(value="/fetchallnotes")
	public List<Note> getNotesByUser(HttpServletRequest req) {
		return noteService.fetchallnotes(req);
	}
	
	@GetMapping(value="/fetchallnotes/{id}")
	public Note getNoteByUser(@PathVariable String id,HttpServletRequest req) {
		return noteService.fetchAnote(req, id);
	}
	
	@PutMapping(value="/updatenote/{id}")
	public Note updateNote(HttpServletRequest req, @PathVariable String id, @RequestBody  String reqBody)
	{
		return noteService.updation(req, id, reqBody);
	}
	
	@DeleteMapping(value="/deletenote/{id}")
	public String delettion(HttpServletRequest req, @PathVariable String id)
	{
		System.out.println("in controler");
		return noteService.deletion(req, id);
	}
}
