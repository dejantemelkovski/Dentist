import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DentistAppointmentFormComponent } from './dentist-appointment-form/dentist-appointment-form.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { ContactComponent } from './contact/contact.component';
import { PatientTableComponent } from './patients/patient-table.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'patient', component: PatientTableComponent },
  { path: 'booking', component: DentistAppointmentFormComponent },
  { path: 'service-details', component: ServiceDetailsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
