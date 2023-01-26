import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from './localStorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(public localService: LocalStorageService, private router: Router) { }

  canActivate(): boolean {
    if(this.localService.isLoggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['sign-up']);
      return false;
    }
  }
}
