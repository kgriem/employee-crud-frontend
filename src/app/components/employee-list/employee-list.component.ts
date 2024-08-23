import { Component } from '@angular/core';
import { EmployeeServiceService } from '../../services/employee-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent {
  employees: any[] = [];
  constructor(private employeeService: EmployeeServiceService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.employeeService.getEmployees().subscribe((data: any[]) => {
      this.employees = data;
    });
  }
}
