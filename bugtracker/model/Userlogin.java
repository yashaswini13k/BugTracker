package com.bugtracker.bugtracker.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="USERLOGIN")


public class Userlogin {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	   
	@Column(unique = true, nullable = false, length = 100)
	private String username;
	   
	@Column(nullable = false, length = 255)   
	private String password;
	   
	@Column(nullable = false, length = 50)   
	private String role;
	   
	@Column(nullable = false)   
	private boolean enabled;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}
	   
	   
}


