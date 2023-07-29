package com.iNotebook.iNotebookBackend.DAO;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iNotebook.iNotebookBackend.entity.Note;

public interface NoteRepository extends JpaRepository<Note, String>
{
	public List<Note> findByUser(String user);
	
}
