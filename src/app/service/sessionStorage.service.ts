import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  public set(key: string, value?: any): void {
    let serializedValue: string = JSON.stringify(value);
    sessionStorage.setItem(key, serializedValue);
  }

  public remove(key: string): void {
    sessionStorage.removeItem(key);
  }

  public get(key: string): void {
    let value: any;
    if (this.has(key)) {
      let serializedValue: any = sessionStorage.getItem(key);
      value = JSON.parse(serializedValue);
    }
    return value;
  }

  public has(key: string): boolean {
    let value: any = sessionStorage.getItem(key);
    let isExists: boolean = !_.isUndefined(value) && !_.isNull(value);
    return isExists;
  }

}
