package com.bugtracker.bugtracker.controller;

import com.bugtracker.bugtracker.model.IssueRequest;
import com.bugtracker.bugtracker.controller.Issue; 
import com.bugtracker.bugtracker.service.IssuesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.io.IOException;
import java.util.List;

@RestController
//@RequestMapping("/api/issues")
@CrossOrigin(origins = "http://localhost:4200")
public class IssueController {

    @Autowired
    private IssuesService issueService;

    @PostMapping(value = "/issues", consumes = "application/json")
    public ResponseEntity<Issue> createIssue(@RequestBody IssueRequest issueRequest) throws IOException {
    	System.out.println("Inside createIssue");
        Issue newIssue = new Issue();
        newIssue.setProjectid(issueRequest.getProjectid());
        newIssue.setTitle(issueRequest.getTitle());
        newIssue.setDescription(issueRequest.getDescription());
        newIssue.setPriority(issueRequest.getPriority());
        newIssue.setType(issueRequest.getType());
	
//        List<MultipartFile> files = issueRequest.getFiles();
//        if (files == null) {
//            files = new ArrayList<>();
//        }
//
//        // Save file names to issue object
//        for (MultipartFile file : files) {
//            if (file != null && !file.isEmpty()) {
//                newIssue.getFiles().add(file.getOriginalFilename());
//                // Handle file storage logic here if needed
//            }
//        }
        Issue savedIssue = new Issue();
		try {
			savedIssue = issueService.createIssue(newIssue);
		} catch (Exception e) {
			System.out.println("inside catch");
			e.printStackTrace();
		}
        return ResponseEntity.ok(savedIssue);
    }

    @GetMapping
    public ResponseEntity<List<Issue>> getAllIssues() {
        List<Issue> issues = issueService.getAllIssues();
        return ResponseEntity.ok(issues);
    }

    // Add other end points like getIssueById, deleteIssueById, etc.
}
