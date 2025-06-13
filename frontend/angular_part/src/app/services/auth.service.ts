import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.loggedIn.asObservable();

  private userRole = new BehaviorSubject<string | null>(null);
userRole$ = this.userRole.asObservable();

private userName = new BehaviorSubject<string | null>(null);
userName$ = this.userName.asObservable();

setUserName(name: string) {
  this.userName.next(name);
  localStorage.setItem('userName', name);
}

getUserName(): string | null {
  return this.userName.value || localStorage.getItem('userName');
}

clearUserName() {
  this.userName.next(null);
  localStorage.removeItem('userName');
}


setRole(role: string) {
  this.userRole.next(role);
  localStorage.setItem('role', role); // persistance
}

getRole(): string | null {
  return this.userRole.value || localStorage.getItem('role');
}

clearRole() {
  this.userRole.next(null);
  localStorage.removeItem('role');
}

  login() {
    this.loggedIn.next(true);
  }

  logout() {
    this.loggedIn.next(false);
  }

  isLoggedIn(): boolean {
    return this.loggedIn.value;
  }
}
