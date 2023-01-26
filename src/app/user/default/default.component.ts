import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { LocalStorageService } from 'src/app/service/localStorage.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  public item: any;

  constructor(public localService: LocalStorageService, private api: ApiService) { }

  ngOnInit(): void {
  }

  logout() {
    this.localService.signOut();
  }

}
