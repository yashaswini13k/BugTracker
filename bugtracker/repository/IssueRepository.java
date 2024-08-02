package com.bugtracker.bugtracker.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.bugtracker.bugtracker.controller.Issue;

@Transactional
@Repository
public interface IssueRepository extends JpaRepository<Issue, Long> {
    // Define custom queries if needed
}

