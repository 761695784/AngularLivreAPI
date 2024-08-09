import { LivreComponent } from './Composants/Administration/livre/livre.component';
import { AccueilMembreComponent } from './Composants/Membres/accueil-membre/accueil-membre.component';
import { ConnexionComponent } from './Composants/Visiteur/connexion/connexion.component';

import { Routes } from '@angular/router';

export const routes: Routes = [

  //Routes par defaut
  { path: '', pathMatch: 'full' , redirectTo: 'visiteur'},

  //Routes pour les visiteurs
  { path: 'visiteur',component: ConnexionComponent},

  //Routes pour les membres
  { path: 'accueil',component: AccueilMembreComponent},

  //Routes pour les administrateurs
  { path: 'livre',component:LivreComponent },

];
