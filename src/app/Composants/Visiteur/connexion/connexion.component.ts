import { Component } from '@angular/core';
import { UserModel } from '../../../../Models/user.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {
  //Injection de dependance





  //Declaration des Variables
  userObject:UserModel = {};









  //Declaration des Methodes

}
