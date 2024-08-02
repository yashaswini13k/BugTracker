package com.bugtracker.bugtracker.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.bugtracker.bugtracker.model.Userlogin;
import com.bugtracker.bugtracker.repository.UserRepository;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public Optional<Userlogin> authenticate(String username, String password) {
        Optional<Userlogin> optionalUser = userRepository.findByUsername(username);
        if (optionalUser.isPresent()) {
            Userlogin user = optionalUser.get();
            if (user.getPassword().equals(password) && user.isEnabled()) {
                return optionalUser; // authentication successful
            }
        }
        return Optional.empty(); // authentication failed
    }
}
