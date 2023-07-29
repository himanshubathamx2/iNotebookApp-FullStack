package com.iNotebook.iNotebookBackend.entity;

import java.util.Date;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="notes")
public class Note
{
	@Id
	@Column(name="id")
	private String id;
	
	@Column(name="user")
	private String user;
	
	@Column(name="title")
	private String title;
	
	@Column(name="description")
	private String description;
	
	@Column(name="tag")
	private String tag;
	
	@Column(name="date")
	private Date date;
	
}
