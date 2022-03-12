import { Customer } from './../../model/Customer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityServiceService {

  private baseUrl = 'http://localhost:9090/sanctionletter';
   
  constructor(private http: HttpClient) { }

  getStudent(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/students/${id}`);
  }

  createStudent(student: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/student`, student);
  }

  updateStudent(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/students/${id}`, value);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/students/${id}`, { responseType: 'text' });
  }

 

}
