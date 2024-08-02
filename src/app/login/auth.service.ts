import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;
  currentUserRole: string | null = null;
  private apiUrl = 'http://localhost:8080/bugtracker';

  constructor(private http: HttpClient, private router: Router) {
    this.checkLoginStatus();
  }

  private checkLoginStatus() {
    // Example: Check localStorage or other persistence for login status
    const token = localStorage.getItem('token'); // Assuming a token-based auth
    this.loggedIn = !!token; // Update loggedIn based on token presence
    if (!this.loggedIn) {
      this.currentUserRole = null;
    }
  }

  login(username: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/api/users/login`, { username, password })
      .pipe(
        catchError((error: any) => {
          // Handle and log any errors
          console.error('Login error:', error);
          return throwError(error); // Rethrow the error to propagate it
        })
      );
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  confirmlogout(){
    if (window.confirm('Logging out... continue?')) {
      // Proceed with logout
      this.logout();
    } else {
      // Cancelled logout
      console.log('Logout cancelled.');
    }
  }

  logout() {
    this.loggedIn = false;
    this.currentUserRole = 'null';
    // Optional: Perform logout logic
    localStorage.removeItem('token');
    this.router.navigate(['']);
     
  }
}
