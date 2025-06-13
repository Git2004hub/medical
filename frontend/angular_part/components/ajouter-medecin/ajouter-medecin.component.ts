import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ajouter-medecin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ajouter-medecin.component.html',
  styleUrls: ['./ajouter-medecin.component.css']
})
export class AjouterMedecinComponent {
  nom = '';
  prenom = '';
  specialite = '';

  constructor(private http: HttpClient) {}

  ajouter() {
    const medecin = {
      nom: this.nom,
      prenom: this.prenom,
      specialite: this.specialite
    };

    this.http.post('http://127.0.0.1:5000/medecins/post', medecin)
      .subscribe(response => {
        alert("Médecin ajouté !");
        this.nom = '';
        this.prenom = '';
        this.specialite = '';
      });
  }
}
