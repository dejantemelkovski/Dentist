import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patientsSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public patients$: Observable<any[]> = this.patientsSubject.asObservable();

  constructor() {}

  addPatient(patient: any): void {
    const currentPatients = this.patientsSubject.getValue();
    const updatedPatients = [...currentPatients, patient];
    this.patientsSubject.next(updatedPatients);
  }
}
