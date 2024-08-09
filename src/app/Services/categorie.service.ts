import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { apiUrl } from './apiUrl';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private http = inject (HttpClient);

  //Methode pour récupérer tous les categories
  getAllcategories(){
    return this.http.get('${apiUrl}/categories');
  }

  //Methodepour creer un categorie
  createcategorie(categorie:any){
    return this.http.post('${apiUrl}/categories', categorie);
  }


  //Methode pour mise a jour  d'un categorie
  updatecategorie(categorie:any, id:any){
    return this.http.put('${apiUrl}/categories/${id}', categorie);
    //  une autre facon de le faire
    //  return this.http.put('${apiUrl}/categories/${categorie.id}', categorie);
  }

  //Methode pour supprimer un categorie
  deletecategorie(id:any){
    return this.http.delete('${apiUrl}/categories/${id}');
  }



}
