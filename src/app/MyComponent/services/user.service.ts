import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/api/getTeam'; // Adjust the URL accordingly

  constructor(private http: HttpClient) {}

  getTeam() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
