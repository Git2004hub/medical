import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedecinService } from '../../src/app/services/medecin.service'; // adapte le chemin
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common'; // pour les templates Angular
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-edit-medecin',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, CommonModule], // ajoute CommonModule, ReactiveFormsModule, etc. selon besoin
  templateUrl: './edit-medecin.component.html',
  styleUrls: ['./edit-medecin.component.css']
})
export class EditMedecinComponent implements OnInit {
  medecinForm!: FormGroup;
  medecinId!: number;

  constructor(
    private route: ActivatedRoute,
    private medecinService: MedecinService,
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
  ) {}

  ngOnInit() {
    this.medecinId = +this.route.snapshot.paramMap.get('id')!;

    this.medecinForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      specialite: ['', Validators.required]
    });

    // Charger les données du médecin
    this.http.get<any>(`http://127.0.0.1:5000/medecins/get/${this.medecinId}`).subscribe(data => {
      this.medecinForm.patchValue({
        nom: data.nom,
        prenom: data.prenom,
        specialite: data.specialite
      });
    });
  }

  onSubmit() {
    if (this.medecinForm.valid) {
      this.http.put(`http://127.0.0.1:5000/medecins/update/${this.medecinId}`, this.medecinForm.value)
        .subscribe(() => {
          alert('Médecin modifié avec succès');
          this.router.navigate(['/list-medecin']);
        });
    }
  }
}
