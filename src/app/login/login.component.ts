import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = ''; // Property to store login error message

  constructor(private authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.username, this.password)
      .subscribe(
        response => {
          // Login successful logic here
          this.authService.loggedIn = true;
          this.authService.currentUserRole = response.role;
          console.log('Login successful',this.authService.currentUserRole);
          this.router.navigate(['issues']); // Navigate to issues component or wherever needed
        },
        error => {
          // Login failed logic here
          this.authService.loggedIn = false; // Ensure loggedOut state on error
          console.error('Login failed:', error);
          if (error.status === 401) {
            this.loginError = 'Invalid credentials';
          } else {
            this.loginError = 'Login failed. Please try again later.';
          }
        }
      );
  }
}
