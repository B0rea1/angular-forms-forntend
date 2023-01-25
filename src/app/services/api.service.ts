import { HttpClient, HttpResponse, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<Array<User>>{
    return this.httpClient.get<Array<User>>(`${environment.apiUrl}/users`);
  }

  getUserById(id: string):Observable<User>{
    return this.httpClient.get<User>(`${environment.apiUrl}/users/${id}`);
  }

  addUser(user:User):Observable<User>{
    return this.httpClient.post<User>(`${environment.apiUrl}/users`, user);
  }
  
  resetPassword(email: string):Observable<HttpResponse<{}>>{
    return this.httpClient.post<{}>(`${environment.apiUrl}/users/resetPassword`, {email: email}, {observe : 'response'});
  }

  login(email: string, password: string):Observable<HttpResponse<{}>>{
    return this.httpClient.post<{}>(`${environment.apiUrl}/auth/login`, {email: email, password: password}, {observe : 'response'});
  }
}
