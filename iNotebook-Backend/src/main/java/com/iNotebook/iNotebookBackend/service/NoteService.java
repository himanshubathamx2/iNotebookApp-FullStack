package com.iNotebook.iNotebookBackend.service;

import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.iNotebook.iNotebookBackend.DAO.NoteRepository;
import com.iNotebook.iNotebookBackend.entity.Note;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class NoteService
{
	@Autowired
	NoteRepository noteRepository;
	
	@Autowired
	UserService userService;
	
	public Note addNote(Note note, HttpServletRequest request)
	{
		note.setUser(userService.getIdentity(request));
		Note addedNote = noteRepository.save(note);
		return addedNote;
	}
	
	public List<Note> fetchallnotes(HttpServletRequest req)
	{	
		String identity = userService.getIdentity(req);	
		List<Note> list = noteRepository.findByUser(identity);
		return list;
	}
	public Note fetchAnote(HttpServletRequest req, String id)
	{	
		String identity = userService.getIdentity(req);	
		List<Note> list = noteRepository.findByUser(identity);
		for(Note n:list)
		{
			if( n.getId().equals(id))
				return n;
		}
		return null;
	}
	
	public Note updation(HttpServletRequest req, String id , String reqBody)
	{
		
		JSONObject jsonReq=new JSONObject(reqBody);
		String title = jsonReq.optString("title");
		String desc =(String) jsonReq.optString("description");
		String tag = jsonReq.optString("tag");
		String identity = userService.getIdentity(req);	
		List<Note> list = noteRepository.findByUser(identity);
		for(Note n: list)
		{
			if( n.getId().equals(id))
			{
				n.setTitle(title);
				n.setTag(tag);
				n.setDescription(desc);
				noteRepository.save(n);
				return n;
			}
		}
		
		return null;
	}

	public String deletion(HttpServletRequest req, String id)
	{
		System.out.println("1");
		String identity = userService.getIdentity(req);	
		System.out.println("2");
		List<Note> list = noteRepository.findByUser(identity);
		System.out.println("3");
		for(Note n: list)
		{
			System.out.println("4");
			if( n.getId().equals(id))
			{
				System.out.println("5");
				noteRepository.deleteById(n.getId());
				System.out.println("6");
				return "Deleted: "+n.getTitle();
			}
			System.out.println("7");
		}	
		System.out.println("8");
		return "Not deleted";
	}
		
}
