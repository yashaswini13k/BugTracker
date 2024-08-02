package com.bugtracker.bugtracker.repository;
import com.bugtracker.bugtracker.model.Userlogin;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Userlogin, Long> {
    Optional<Userlogin> findByUsername(String username);
}
