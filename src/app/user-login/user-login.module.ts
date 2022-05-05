import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserLoginComponent } from './add-user-login/add-user-login.component';
import { SharedModule } from '../shared/shared.module';
import { UserLoginsListComponent } from './user-logins-list/user-logins-list.component';
import { EditUserLoginComponent } from './edit-user-login/edit-user-login.component';


@NgModule({
  declarations: [
    AddUserLoginComponent,
    UserLoginsListComponent,
    EditUserLoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UserLoginModule { }
