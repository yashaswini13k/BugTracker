package com.bugtracker.bugtracker.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.bugtracker.bugtracker.model.LoginRequest;
import com.bugtracker.bugtracker.model.Userlogin;

import com.bugtracker.bugtracker.service.AuthService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200") // Adjust URL to match your Angular app's address
public class UserController {

    @Autowired
    private AuthService authService;
    
    public static class LoginResponse {
        private String role;
        
        public LoginResponse(String role) {
            this.role = role;
        }
            // Getter
            public String getRole() {
                return role;
            }

            // Setter
            public void setRole(String role) {
                this.role = role;
            }
        }   
    
    
//   @GetMapping("/user")
//    public List<Userlogin> getAllUserlogins(){
//    	return UserRepository.findAll();
//    }
    
    @PostMapping(value = "/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
    	System.out.println("Inside login");
        Optional<Userlogin> optionalUser = authService.authenticate(request.getUsername(), request.getPassword());
        if (optionalUser.isPresent()) {
        	return ResponseEntity.ok(new LoginResponse(optionalUser.get().getRole()));            
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("INVALID_CREDENTIALS");
        }
    }
}
