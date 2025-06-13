import { Routes } from '@angular/router';
import { ConsultationListComponent } from '../../components/consultation-list/consultation-list.component';
import { ConsultationDetailComponent } from '../../components/consultation-detail/consultation-detail.component';
import { RendezvousListComponent } from '../../components/rendezvous-list/rendezvous-list.component';
import { RendezvousFormComponent } from '../../components/rendezvous-form/rendezvous-form.component';
import { ConsultationFormComponent } from '../../components/consultation-form/consultation-form.component';
import { LoginComponent } from '../../components/login/login.component';
import { RegisterComponent } from '../../components/register/register.component';
import { AdminPageComponent } from '../../components/admin-page/admin-page.component';
import { AjouterPatientComponent } from '../../components/ajouter-patient/ajouter-patient.component';
import { ListPatientsComponent } from '../../components/list-patients/list-patients.component';
import { AjouterMedecinComponent } from '../../components/ajouter-medecin/ajouter-medecin.component';
import { ListMedecinsComponent } from '../../components/list-medecins/list-medecins.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { EditMedecinComponent } from '../../components/edit-medecin/edit-medecin.component';
import { EditPatientComponent } from '../../components/edit-patient/edit-patient.component';

export const routes: Routes = [
  { path: 'list-consults', component: ConsultationListComponent },
  { path: 'detail-consult', component: ConsultationDetailComponent },
  { path: 'list-rdv', component: RendezvousListComponent },
  { path: 'form-rdv', component: RendezvousFormComponent },
  { path: 'form-consult', component: ConsultationFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'add-patient', component: AjouterPatientComponent },
  { path: 'list-patient', component: ListPatientsComponent },
  { path: 'add-medecin', component: AjouterMedecinComponent },
  { path: 'list-medecin', component: ListMedecinsComponent },
  { path: 'edit-medecin/:id', component: EditMedecinComponent },
  { path: 'edit-patient/:id', component: EditPatientComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
