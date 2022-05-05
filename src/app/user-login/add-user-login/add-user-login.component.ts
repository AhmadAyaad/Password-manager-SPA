import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from '../services/user-login.service';

@Component({
  selector: 'app-add-user-login',
  templateUrl: './add-user-login.component.html',
  styleUrls: ['./add-user-login.component.scss']
})
export class AddUserLoginComponent implements OnInit {
  userLoginform: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private userLoginService: UserLoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    this.userLoginform = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(pattern)]]
    })
  }

  get formControls() {
    return this.userLoginform.controls;
  }

  onSubmit(): void {
    this.userLoginService.addNewUserLogin(this.userLoginform.value).subscribe((res) => {
      this.router.navigate(['/logins/list']);
    }, err => alert(err.error));
  }
}
