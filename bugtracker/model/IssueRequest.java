package com.bugtracker.bugtracker.model;


public class IssueRequest {

    private String projectid;
    private String title;
    private String description;
    private String priority;
    private String type;
    // Initialize the list
// Note: MultipartFile may need special handling

    // Getters and setters

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

  
}

