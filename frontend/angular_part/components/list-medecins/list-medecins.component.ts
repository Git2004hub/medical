import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Medecin {
  medecin_id?: number;
  nom: string;
  prenom: string;
  specialite: string;
}

@Component({
  selector: 'app-list-medecins',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule],
  templateUrl: './list-medecins.component.html',
  styleUrls: ['./list-medecins.component.css']
})
export class ListMedecinsComponent implements OnInit {
  medecins: Medecin[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<Medecin[]>('http://127.0.0.1:5000/medecins/get')
      .subscribe(data => this.medecins = data);
  }

  supprimer(id: number) {
    this.http.delete(`http://127.0.0.1:5000/medecins/delete/${id}`)
      .subscribe(() => {
        this.medecins = this.medecins.filter(m => m.medecin_id !== id);
      });
  }
}
