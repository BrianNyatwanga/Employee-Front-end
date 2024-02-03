import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  //HOLDS EMPLOYEES FROM BACKEND
  public employees: Employee[] = [];

  //INJECTING SERVICE TO APP COMPONENT
  constructor(private employeeService: EmployeeService){}

  ngOnInit(){
    this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployees().subscribe(  
      //.TO GET NOTIFIED
      (Response: Employee[]) => {
        this.employees = Response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
