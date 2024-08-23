import { Component } from '@angular/core';
import { Employee } from '../../models/employee';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeServiceService } from '../../services/employee-service.service';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],

  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css',
})
export class CreateEmployeeComponent {
  employeeModel: Employee = new Employee(0, 'john', 'john@gmail.com');

  constructor(private employeeService: EmployeeServiceService) {}

  onSubmitHandler(formData: any) {
    this.employeeService.createEmployee(formData).subscribe(
      (response) => {
        console.log('Employee created successfully:', response);
      },
      (error) => {
        console.error('Error creating employee:', error);
      },
    );
  }
}
