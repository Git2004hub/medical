import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedecinService {
  private apiUrl = 'http://127.0.0.1:5000/medecins';  // Change si nécessaire

  constructor(private http: HttpClient) {}

  // Obtenir la liste des médecins
  getMedecins(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/get`);
  }

  // Ajouter un médecin
  addMedecin(medecin: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/post`, medecin);
  }

  // Supprimer un médecin par ID
  deleteMedecin(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  // Récupérer un médecin par ID
getMedecinById(id: number): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/get/${id}`);
}

// Mettre à jour un médecin par ID
updateMedecin(id: number, medecin: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/update/${id}`, medecin);
}

}
