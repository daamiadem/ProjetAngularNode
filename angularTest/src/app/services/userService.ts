import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {user} from '../models/user'
@Injectable({
    providedIn: 'root'
  })

  export class UserService {

    private url = 'http://localhost:5000/api/users';
  
    constructor(private http : HttpClient) { }
  
    public ajouterUser(user: user) : Observable<user>{
  
      return this.http.post<user>(this.url + "/newUser",user, this.httpOptions);
    }
  
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
      }
  
  
    getAllUsers(): Observable<user[]> {
      return this.http.get<user[]>(this.url);
    }
  
    RemoveUser(user: String): Observable<user> {
      const id = user;
      const url = this.url + '/deleteUser/' + id;
      return this.http.delete<user>(url);
    }
  
 
  
  
  }