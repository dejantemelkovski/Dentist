import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPatientTable: boolean = false;

  togglePatientList(): void {
    this.showPatientTable = !this.showPatientTable;
  }
}
