import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-edit-patient',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  patientForm!: FormGroup;
  patientId!: number;
  erreur: string = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.patientId = Number(this.route.snapshot.paramMap.get('id'));
    this.patientForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      adresse: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern(/^\+?\d{7,15}$/)]]
    });

    // Charger les données du patient depuis le backend
    this.http.get<any>(`http://127.0.0.1:5000/patients/get/${this.patientId}`).subscribe({
      next: (data) => this.patientForm.patchValue(data),
    });
  }

  onSubmit() {
    if (this.patientForm.invalid) return;

    this.http.put(`http://127.0.0.1:5000/patients/update/${this.patientId}`, this.patientForm.value)
      .subscribe({
        next: () => this.router.navigate(['/list-patient']),
        error: () => this.erreur = "Erreur lors de la mise à jour."
      });
  }
}
