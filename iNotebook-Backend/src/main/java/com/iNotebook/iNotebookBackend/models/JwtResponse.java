package com.iNotebook.iNotebookBackend.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@ToString
@Builder
@NoArgsConstructor
public class JwtResponse
{
	private String jwtToken;
	
	private String username;
}
