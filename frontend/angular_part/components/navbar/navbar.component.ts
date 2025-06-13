import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../src/app/services/auth.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  role: string | null = null;
  userName: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });
    this.authService.userRole$.subscribe(role => {
      this.role = role;
    });
    this.authService.userName$.subscribe(name => {
      this.userName = name;
    });
  }

  logout() {
    if(confirm("Êtes-vous sûr de vouloir vous déconnecter ?") ) {
    
      this.authService.logout();
      this.authService.clearRole();
      this.role = null;
      this.authService.clearUserName();  // 👈 important
      this.userName = null;

    }
    
  }
}
