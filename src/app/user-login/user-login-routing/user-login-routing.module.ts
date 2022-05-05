import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddUserLoginComponent } from '../add-user-login/add-user-login.component';
import { UserLoginsListComponent } from '../user-logins-list/user-logins-list.component';
import { EditUserLoginComponent } from '../edit-user-login/edit-user-login.component';


const routes: Routes = [
  { path: 'add', component: AddUserLoginComponent },
  { path: 'list', component: UserLoginsListComponent },
  { path: ':username', component: EditUserLoginComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class UserLoginRoutingModule { }
