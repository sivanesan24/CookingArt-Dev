import { Component, EventEmitter, OnDestroy, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';
import { LocalStorageService } from 'src/app/service/localStorage.service';
import { DropDownContentComponent } from './drop-down-content/drop-down-content.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() public elementId = new EventEmitter<number>();

  constructor(public matDialog: MatDialog, 
    private apiService: ApiService, 
    private localService: LocalStorageService,
    private router: Router,
    private toast: ToastrService) {}


  openDialog() {
    const dialogRef = this.matDialog.open(DropDownContentComponent, {
      width: "100%",
      height: "300px",
      backdropClass: "backdropBackground",
    })
    dialogRef.afterClosed().subscribe((res) => {
      this.elementId.emit(res);
    })
  }

  public goMain() {
    this.apiService.sendEvent(0);
  }

  public register(): void  {
    this.apiService.sendEvent('sign-up');
  }

  public login(): void  {
    this.apiService.sendEvent('login');
  }

}
