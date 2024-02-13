import { Component } from '@angular/core';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent {
  patients: any[] = [
    { name: 'Дејан', surname: 'Темелковски', dateOfBirth: new Date(1986, 10, 23), uin: '123456789', healthInsuranceFund: 'Има', note: 'Контрола', service: 'Пломба' },
    { name: 'Стеве', surname: 'Накевски', dateOfBirth: new Date(1985, 9, 25), uin: '987654321', healthInsuranceFund: 'Нема', note: 'Да Контрола', service: 'Вадење заб' },
  ];

  selectedPatient: any = null;
  editing: boolean = false;

  editPatient(index: number): void {
    this.selectedPatient = this.patients[index];
    this.editing = true;
  }

  deletePatient(index: number): void {
    this.patients.splice(index, 1);
  }

  viewPatient(index: number): void {
    this.selectedPatient = { ...this.patients[index] };
    this.editing = false;
  }

  cancelEdit(): void {
    this.selectedPatient = null;
    this.editing = false;
  }

  saveChanges(): void {
    this.editing = false;
    this.selectedPatient = null;
  }

  selectPatient(patient: any): void {
    this.selectedPatient = patient;
    this.editing = false;
  }
}
