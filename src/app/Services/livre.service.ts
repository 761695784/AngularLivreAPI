import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { apiUrl } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  private http = inject (HttpClient);

  //Methode pour récupérer tous les livres
  getAllLivres(){
    return this.http.get('${apiUrl}/livres');
  }

  //Methodepour creer un livre
  createLivre(livre:any){
    return this.http.post('${apiUrl}/livres', livre);
  }


  //Methode pour mise a jour  d'un livre
  updateLivre(livre:any, id:any){
    return this.http.put('${apiUrl}/livres/${id}', livre);
    //  une autre facon de le faire
    //  return this.http.put('${apiUrl}/livres/${livre.id}', livre);
  }

  //Methode pour supprimer un livre
  deleteLivre(id:any){
    return this.http.delete('${apiUrl}/livres/${id}');
  }



}
