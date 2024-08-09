import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { apiUrl } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject (HttpClient);

  //Methode pour se logger
login(identifiant:any){
  // Methode de connexion
  return this.http.post('${apiUrl}/login', identifiant);

}
// Methode pour se déconnecter
logout(){
  return this.http.get('${apiUrl}/logout');
}
}
