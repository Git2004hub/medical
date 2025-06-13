import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientService } from '../../src/app/services/patient.service';
import { Patient } from '../../src/app/models/patient.model';
import { RouterModule } from '@angular/router';  // <-- Import nécessaire pour routerLink

@Component({
  selector: 'app-list-patients',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./list-patients.component.css'],
  templateUrl: './list-patients.component.html'
})
export class ListPatientsComponent implements OnInit {
  patients: Patient[] = [];

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.patientService.getPatients().subscribe(data => {
      this.patients = data;
    });
  }

  supprimer(patient_id: number) {
    if (!confirm("Confirmer la suppression ?")) return;
    this.patientService.supprimerPatient(patient_id).subscribe({
      next: () => this.patients = this.patients.filter(p => p.patient_id !== patient_id),
      error: () => alert("Erreur de suppression")
    });
  }
}
