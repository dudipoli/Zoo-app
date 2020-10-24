import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { User } from '../classes/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formError: string;
  loginForm: FormGroup;
  loginDetails: any;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.loginForm = new FormGroup({
      "userName": new FormControl(null, Validators.required),
      "password": new FormControl(null, Validators.required)
    });
  };

  get f() { return this.loginForm.controls; }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const userDetails: User = {
      password: this.loginForm.value["password"],
      userName: this.loginForm.value["userName"],
    };

    this.apiService.Login(userDetails).subscribe((res) => {
      localStorage.setItem("token", res.token);
      this.router.navigate(['/catalog']);

    }, (error) => {
      this.formError = error.error;
      this.loginForm.reset();
    });
  }
}
