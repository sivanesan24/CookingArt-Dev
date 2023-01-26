import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/service/api.service';
import { LocalStorageService } from 'src/app/service/localStorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loading = false;

  public loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(public localService: LocalStorageService, private api: ApiService, private toast: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.loading = true;
    if (this.loginForm.valid) {
      this.api.loginUser(this.loginForm.value).subscribe((res) => {
        if (res) {
          setTimeout(() => {
            this.loading = false;
            this.localService.storeToken(res.token);
            var userAccess = this.localService.decodeToken();
            if (userAccess.role == "User") {
              this.router.navigate(['user/user-home']);
              this.toast.success(`Welcome ${userAccess.unique_name}`, 'Login Successfully');
            }
            if (userAccess.role == "Admin") {
              this.router.navigate(['admin/admin-home']);
              this.toast.success(`Welcome ${userAccess.unique_name}`, 'Login Successfully');
            }
          }, 3000);
        }
      })
    }
  }

}
