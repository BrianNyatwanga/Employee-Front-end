import { Injectable } from '@angular/core';
import { config } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

//SERVER URL  
private apiServerUrl = config.apiBaseUrl;
     
//MAKING HTTP REQUESTS
constructor(private http: HttpClient){}

//GET
public getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>('${this.apiServerUrl}/employee/all');
}
//POST
public addEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>('${this.apiServerUrl}/employee/add', employee);
}
//PUT
public updateEmployee(employee: Employee): Observable<Employee>{
    return this.http.put<Employee>('${this.apiServerUrl}/employee/update', employee);//PASSING VARIABLE AND STRING &{},
}
//DELETE
public deleteEmployee(employeeId: number): Observable<void>{
    return this.http.delete<void>('${this.apiServerUrl}/employee/delete/${employeeId}');
}

}