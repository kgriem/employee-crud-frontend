import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeServiceService } from '../../services/employee-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css',
})
export class UpdateEmployeeComponent {
  employeeModel: Employee = new Employee(0, 'john', 'john@gmail.com');

  constructor(private employeeService: EmployeeServiceService) {}

  onSubmitHandler(formData: any) {
    this.employeeService.updateEmployee(formData).subscribe(
      (response) => {
        console.log('Employee created successfully:', response);
      },
      (error) => {
        console.error('Error creating employee:', error);
      },
    );
  }
}
