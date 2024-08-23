import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  private url = 'http://localhost:9000/api/employees';

  constructor(private httpClient: HttpClient) {}

  getEmployee(data: any): Observable<any> {
    return this.httpClient.get<any>(this.url, data);
  }
  getEmployees(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }
  createEmployee(data: any): Observable<any> {
    console.log(data);
    let newurl = `${this.url}/create`;
    console.log(newurl);
    return this.httpClient.post<any>(newurl, data);
  }
  deleteEmployee(data: any): Observable<any> {
    console.log(data);
    let newurl = `${this.url}/id/${data.id}`;
    return this.httpClient.delete<any>(newurl, data);
  }
  updateEmployee(data: any): Observable<any> {
    console.log(data);
    let newurl = `${this.url}/update`;
    return this.httpClient.put<any>(newurl, data);
  }
}
