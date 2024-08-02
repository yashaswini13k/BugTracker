package com.bugtracker.bugtracker.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bugtracker.bugtracker.controller.Issue;
import com.bugtracker.bugtracker.repository.IssueRepository;

import java.util.List;

@Service
public class IssuesService {
    
    @Autowired
    private IssueRepository issueRepository;

    public Issue createIssue(Issue issue) {
    	System.out.println("inside createIssue");
        return issueRepository.save(issue);
    }

    public List<Issue> getAllIssues() {
    	System.out.println("inside getAllIssues");
        return issueRepository.findAll();
    }

    public Issue getIssueById(Long id) {
        return issueRepository.findById(id).orElse(null);
    }

    // Add other service methods as needed
}
