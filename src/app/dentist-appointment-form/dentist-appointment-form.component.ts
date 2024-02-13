import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../patients/patient.service';

@Component({
  selector: 'app-dentist-appointment-form',
  templateUrl: './dentist-appointment-form.component.html',
  styleUrls: ['./dentist-appointment-form.component.css']
})
export class DentistAppointmentFormComponent {
  appointmentForm: FormGroup;
  appointments: any[] = [];
  isEditing = false;
  editedIndex: number | null = null;

  constructor(private formBuilder: FormBuilder, private patientService: PatientService) {
    this.appointmentForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      dob: ['', Validators.required],
      uin: ['', Validators.required],
      healthInsuranceFund: ['', Validators.required],
      note: ['', Validators.required],
      service: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.appointmentForm.valid) {
      const formData = this.appointmentForm.value;
      if (this.isEditing && this.editedIndex !== null) {
        this.appointments[this.editedIndex] = { ...formData };
        this.isEditing = false;
        this.editedIndex = null;
      } else {
        this.appointments.push({ ...formData });
        this.patientService.addPatient({ ...formData });
      }
      this.appointmentForm.reset();
      this.scrollToTable();
    } else {
      this.markFormGroupTouched(this.appointmentForm);
    }
  }

  private scrollToTable(): void {
    setTimeout(() => {
      const appointmentsTable = document.getElementById('appointmentsTable');
      if (appointmentsTable) {
        appointmentsTable.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  editAppointment(index: number) {
    this.isEditing = true;
    this.editedIndex = index;
    const appointment = this.appointments[index];
    this.appointmentForm.patchValue(appointment);
  }

  cancelEdit() {
    this.isEditing = false;
    this.editedIndex = null;
    this.appointmentForm.reset();
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
