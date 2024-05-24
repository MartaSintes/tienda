import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;

  constructor(private http: HttpClient) {}


  //cerrar sesión
  logout(): void {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
  }

  // Método para verificar si el usuario está logueado
  checkLoggedIn(): boolean {
    return this.isLoggedIn || !!localStorage.getItem('token');
  }
}
