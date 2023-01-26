import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public usePayload: any;

  constructor(private router: Router) {
    this.usePayload = this.decodeToken();
  }

  public set(key: string, value?: any): void {
    let serializedValue: string = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  }

  public remove(key: string): void {
    localStorage.removeItem(key);
  }

  public get(key: string): any {
    let value: any;
    if (this.has(key)) {
      let serializedValue: any = localStorage.getItem(key);
      value = JSON.parse(serializedValue);
    }
    return value;
  }

  public has(key: string): boolean {
    let value: any = localStorage.getItem(key);
    let isExists: boolean = !_.isUndefined(value) && !_.isNull(value);
    return isExists;
  }

  public storeToken(token: string) {
    localStorage.setItem("token", token);
  }

  public getToken() {
    return localStorage.getItem("token");
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem("token");
  }

  public signOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  public decodeToken() {
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    return jwtHelper.decodeToken(token);
  }
  
}
