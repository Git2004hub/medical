import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PatientService } from '../../src/app/services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-patient',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./ajouter-patient.component.css'],
  templateUrl: './ajouter-patient.component.html'
})
export class AjouterPatientComponent {
  nom = '';
  prenom = '';
  email = '';
  age: number = 0;
  sexe = 'Homme';
  erreur = '';

  constructor(private patientService: PatientService, private router: Router) {}

  onSubmit() {
    if (!this.nom || !this.prenom || !this.email || !this.age || !this.sexe) {
      this.erreur = 'Tous les champs sont obligatoires.';
      return;
    }

    const newPatient = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      age: this.age,
      sexe: this.sexe
    };

    this.patientService.ajouterPatient(newPatient).subscribe({
      next: () => {
        alert("Patient ajouté avec succès !");
        this.router.navigate(['/patients']);
      },
      error: () => {
        this.erreur = 'Erreur lors de l’ajout du patient.';
      }
    });
  }
}
