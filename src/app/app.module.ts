import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { HeaderComponent } from './home/header/header.component';
import { ContentComponent } from './home/content/content.component';
import { FooterComponent } from './home/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './shared/material.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownContentComponent } from './home/header/drop-down-content/drop-down-content.component';
import { SignupComponent } from './home/signup/signup.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './service/interceptor/token.interceptor';
import { AuthGuardService } from './service/auth-guard.service';
import { ToastrModule } from 'ngx-toastr';
import { NgxLoadingModule } from "ngx-loading";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    DropDownContentComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxLoadingModule.forRoot({}),
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuardService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
