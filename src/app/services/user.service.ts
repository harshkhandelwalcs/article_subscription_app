
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  localData = new Subject<any>();

  getUsersUrl = 'assets/dummy-data/users.json';

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get(this.getUsersUrl);
  }
}
