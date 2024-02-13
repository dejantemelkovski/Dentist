import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PatientService } from '../patients/patient.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  showPatientList: boolean = false;
  selectedPatient: any = null;
  editing: boolean = false;
  editForm: FormGroup;
  patients: any[] = [];
  patientsSubscription: Subscription;

  constructor(private formBuilder: FormBuilder, private patientService: PatientService) {}

  ngOnInit() {
    this.initEditForm();
    this.patientsSubscription = this.patientService.patients$.subscribe(patients => {
      this.patients = patients;
    });
  }

  ngOnDestroy() {
    this.patientsSubscription.unsubscribe();
  }

  toggleEditing(patient: any) {
    this.selectedPatient = patient;
    this.editing = true;
    this.initEditForm();
  }

  initEditForm() {
    this.editForm = this.formBuilder.group({
      name: [this.selectedPatient ? this.selectedPatient.name : '', Validators.required],
    });
  }

  get formControls() {
    return this.editForm.controls;
  }

  saveChanges() {
    if (this.editForm.invalid) {
      return;
    }
  }

  cancelEdit() {
    this.editing = false;
    this.selectedPatient = null;
    this.editForm.reset();
  }
}
