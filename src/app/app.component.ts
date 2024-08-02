import { Component, NgModule } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { IssueListComponent } from './issue-list/issue-list.component';
import { issues } from './mock-issues';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './login/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})


export class AppComponent {
  title = 'issue-tracker';
  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
  }
}