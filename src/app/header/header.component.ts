import { Component } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  // standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
 constructor(private authService: AuthService, private router: Router) {}


}

