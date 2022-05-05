import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDTO } from 'src/app/login/models/loginDTO';
import { UserLoginService } from '../services/user-login.service';

@Component({
  selector: 'app-user-logins-list',
  templateUrl: './user-logins-list.component.html',
  styleUrls: ['./user-logins-list.component.scss']
})
export class UserLoginsListComponent implements OnInit {
  userLogins: LoginDTO[];

  constructor(private userLoginService: UserLoginService, private router: Router) { }
  ngOnInit(): void {
    this.getUserLogins();
  }
  getUserLogins(): void {
    this.userLoginService.getUserLogins().subscribe((res) => {
      this.userLogins = res;
    });
  }

  onSelectUserLogin(username: string) {
    this.router.navigate(['/logins', username]);
  }
  onDeleteUserLogin(username: string) {
    if (confirm(`Are you sure you want to delete ${username}`)) {
      this.userLoginService.deleteUserLogin(username).subscribe(res => {
        this.userLogins = this.userLogins.filter(userLogin => userLogin.username !== username);
      });
    }
  }
}
