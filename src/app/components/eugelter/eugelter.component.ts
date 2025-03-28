import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eugelter',
  templateUrl: './eugelter.component.html',
  styleUrls: ['./eugelter.component.scss']
})
export class EugelterComponent implements OnInit {
  medications: any[] = [];  // Store medications
  names: any[] = [
    { name: 'Mdau GS', router: '/mdau' },
    { name: 'Chauke ML ', router: '/chauke' },
    { name: 'Mahlangu KM ', router: '/mahlanku' },
    { name: 'Ramokgotsoa MR', router: '/ramokgotsoa' }
  ];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getMedications();  // Fetch medications when the component loads
  }

  // Fetch all medications
  getMedications() {
    this.http.get<{ medications: any[] }>('http://localhost:3000/get-medications')
      .subscribe(response => {
        this.medications = response.medications;
        console.log('Fetched medications:', this.medications);
      }, error => {
        console.error('Error fetching medications:', error);
      });
  }

  // Add Medication
  addMedication(medication: { name: string; dosage: string; quantity: number; stock_count: number; threshold: number; received_count: number }) {
    this.http.post<{ message: string; medication: any }>('http://localhost:3000/add-medication', medication)
      .subscribe(response => {
        this.medications.push(response.medication);
        console.log('Medication added:', response.medication);
        this.getMedications();
      }, error => {
        console.error('Error adding medication:', error);
      });
  }
}
