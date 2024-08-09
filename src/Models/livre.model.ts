export interface LivreModel{
  id?: number;
  isbn?:string;
  titre?: string;
  auteur?: string;
  date_publication?: string;
  quantite?:string;
  disponibilite?:boolean;
  image?:string;
  created_at: Date;
  updated_at: Date;
}
