import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient.model';

@Injectable({ providedIn: 'root' })
export class PatientService {
  private baseUrl = 'http://localhost:5000/patients';

  constructor(private http: HttpClient) {}

  ajouterPatient(patient: Patient): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, patient);
  }

  getPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseUrl}/all`);
  }

  supprimerPatient(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}
