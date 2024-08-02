package com.bugtracker.bugtracker.controller;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="ISSUES")
public class Issue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @Column(name = "PROJECTID")
    private String projectid;
    
    @Column(name = "TITLE")
    private String title;
    
    @Column(name = "DESCRIPTION")
    private String description;
    
    @Column(name = "PRIORITY")
    private String priority;
    
    @Column(name = "TYPE")
    private String type;
    
    //private List<String> files = new ArrayList<>();

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getProjectid() {
        return projectid;
    }

    public void setProjectid(String projectid) {
        this.projectid = projectid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

	/*
	 * public List<String> getFiles() { return files; }
	 * 
	 * public void setFiles(List<String> files) { this.files = files; }
	 */
}
