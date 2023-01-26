import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { LocalStorageService } from './localStorage.service';
import { SessionStorageService } from './sessionStorage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // public baseURL: String = "https://localhost:7067/api";
  public baseURL: string = "http://sivanesandh-001-site1.atempurl.com/api";

  public subject$ = new Subject<any>();

  constructor(
    private localService: LocalStorageService,
    private sessionService: SessionStorageService,
    private http: HttpClient,
    private router: Router) { }


  sendEvent(i: any) {
    this.subject$.next(i);
  }

  getEvent(): Observable<any> {
    return this.subject$.asObservable();
  }

  public registerUser(obj: any) {
    return this.http.post<any>(`${this.baseURL}/Auth/sign-up`, obj);
  }

  public loginUser(obj: any) {
    return this.http.post<any>(`${this.baseURL}/Auth/login`, obj);
  }

  public getUser() {
    return this.http.get(`${this.baseURL}/Auth`);
  }

}
