import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginDTO } from 'src/app/login/models/loginDTO';
import { UserLoginService } from '../services/user-login.service';

@Component({
  selector: 'app-edit-user-login',
  templateUrl: './edit-user-login.component.html',
  styleUrls: ['./edit-user-login.component.scss']
})
export class EditUserLoginComponent implements OnInit {
  selectedUsername: string;
  userLoginform: FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
    private userLoginService: UserLoginService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.selectedUsername = this.activatedRoute.snapshot.params?.username;
    this.getUserLogin();
  }

  private initFormAndBind(userLogin: LoginDTO): void {
    const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    this.userLoginform = this.formBuilder.group({
      username: [userLogin?.username, Validators.required],
      password: [userLogin?.password, [Validators.required, Validators.pattern(pattern)]]
    })
  }

  getUserLogin() {
    this.userLoginService.getUserLogin(this.selectedUsername).subscribe((res: LoginDTO) => {
      if (res) {
        this.initFormAndBind(res);
      }
    });
  }

  get formControls() {
    return this.userLoginform.controls;
  }
  onSubmit() {
    if (!this.userLoginform.valid) {
      this.userLoginform.markAllAsTouched();
      this.userLoginform.updateValueAndValidity();
      return;
    }
    const data = { ...this.userLoginform.value, oldUsername: this.selectedUsername };
    this.userLoginService.updateUserLogin(data).subscribe((res) => {
      this.router.navigate(['/logins/list']);
    }, err => alert(err.error));
  }
}
