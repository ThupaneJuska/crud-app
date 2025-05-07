import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

    staff: any[] = []; 
  
    constructor(private http: HttpClient) {}
  
    ngOnInit() {
      this.getMedications();  // Fetch medications when the component loads
    }
  
    // Fetch all medications
    getMedications() {
      this.http.get<any[]>('http://localhost:3000/api/staff/all-details')
        .subscribe(response => {
          console.log('Response:', response);
          this.staff = response;
          console.log('Fetched medications:', this.staff);
        }, error => {
          console.error('Error fetching medications:', error);
        });
    }

    deleteStaff(staffId: number) {
      if (confirm('Are you sure you want to delete this staff member?')) {
        this.http.delete(`http://localhost:3000/api/staff/${staffId}`).subscribe(() => {
          this.staff = this.staff.filter(s => s.staff_id !== staffId);
          console.log('Staff member deleted');
        }, error => {
          console.error('Error deleting staff member:', error);
        });
      }
    }
}
