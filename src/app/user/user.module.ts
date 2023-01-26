import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultComponent } from './default/default.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './../service/auth-guard.service';

const routes: Routes = [
  {
    path: "user-home",
    component: DefaultComponent,
    canActivate: [AuthGuardService]
  },
];


@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserModule { }
