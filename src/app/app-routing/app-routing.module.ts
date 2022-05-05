import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '', loadChildren: () =>
      import('../login/login-routing/login-routing.module').then(
        (m) => m.LoginRoutingModule
      ),
  },
  {
    path: 'logins', loadChildren: () =>
      import('../user-login/user-login-routing/user-login-routing.module').then(
        (m) => m.UserLoginRoutingModule
      ),
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
