import { Component } from '@angular/core';
import { EmployeeServiceService } from '../../services/employee-service.service';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './delete-employee.component.html',
  styleUrl: './delete-employee.component.css',
})
export class DeleteEmployeeComponent {
  employeeModel: Employee = new Employee(0, 'john', 'john@gmail.com');

  constructor(private employeeService: EmployeeServiceService) {}

  onSubmitHandler(formData: any) {
    this.employeeService.deleteEmployee(formData).subscribe(
      (response) => {
        console.log('Employee created successfully:', response);
      },
      (error) => {
        console.error('Error creating employee:', error);
      },
    );
  }
}
