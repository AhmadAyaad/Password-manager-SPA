import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(pattern)]]
    })
  }

  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.loginService.login(this.loginForm.value).subscribe((res: any) => {
      localStorage.setItem('token', res.token)
      localStorage.setItem('username', res.username)
      this.router.navigate(['/logins/list']);
    },
      err => alert(err.error)
    );
  }
}
