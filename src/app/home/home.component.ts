import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public elementId: number;
  public loading = false;
  public event: Subscription;

  constructor(private apiService: ApiService, public router: Router) {
    this.event = this.apiService.getEvent().subscribe((res) => {
      if (res == 'sign-up') {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.router.navigate(['sign-up']);
        }, 2000);
      }
      if (res == 'login') {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.router.navigate(['login']);
        }, 2000);
      }
    })
  }


  ngOnInit(): void { }

  public getElementId(e: number) {
    this.elementId = e;
    this.apiService.sendEvent(this.elementId);
  }


  ngOnDestroy(): void {
    this.event.unsubscribe();
  }

}
